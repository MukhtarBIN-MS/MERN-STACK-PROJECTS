import ticketModel from "../models/ticket.js";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";


const generateSerialnumber = () => {
  return 'MK-CODE-' + Math.floor(Math.random() * 10000);
};

const generateQRCode = async (data) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(data);
    return qrCodeDataUrl;
  } catch (error) {
    console.error("Error generating QR code:", error);
    return null;
  }
};

export const generateTickets = async (req, res) => {
  const { numberOfTickets } = req.body;
  try {
    const bulkTickets = [];

    const processTicket = async () => {
      const ticket = {
        key: uuidv4(),
        serialNumber: generateSerialnumber(),
      };

      const qrCodeData = JSON.stringify(ticket);
      ticket.qrCode = await generateQRCode(qrCodeData);

      return ticket;
    };

    for (let i = 0; i < numberOfTickets; i++) {
      const ticket = await processTicket();
      bulkTickets.push(ticket);
      console.log("Generated Tickets:", bulkTickets);
    }

    console.log("Generated Tickets:", bulkTickets);

    const savedTickets = await Promise.all(
      bulkTickets.map(async (ticket) => {
        const savedTicket = await ticketModel.create(ticket);
        return savedTicket;
      })
    );

    console.log("Saved Tickets:", savedTickets);

    if (savedTickets && savedTickets.length > 0) {
      return res.status(201).json({ message: "Tickets created succesfully" });
    } else {
      return res.status(500).json({ message: "Problem generating tikets" });
    }
  } catch (err) {
    console.error("Error in generateTickets:", err);
    return res.status(500).json({ message: err });
  }
};

// validate the ticket base on qrcode | key | serial number

export const validateTickets = async (req, res) => {
  try {
    let ticket;
    const { identifier } = req.params;
    if (!identifier) {
      return res.status(400).json({ message: "Invalid ticket identifier" });
    }
    const isUUID = identifier.match(/[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}/i);
    if (isUUID) {
      ticket = await ticketModel.findOne({ key: identifier });
    } else {
      const isBase64 =
        Buffer.from(identifier, "base64").toString("base64") === identifier;

      if (isBase64) {
        ticket = await ticketModel.findOne({ qrCode: identifier });
      } else {
        ticket = await ticketModel.findOne({ serialNumber: identifier });
      }
    }
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    if (ticket.isUsed) {
      return res.status(400).json({ message: "Ticket already used" });
    }
    if (!ticket.isActive) {
      return res.status(401).json({ message: "Ticket is not active" });
    }

    await workOutModel.updateOne({$set:ticket.isUsed = true});

    res.status(200).json({ message: "Ticket validated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const result = await ticketModel.bulkWrite(
//   bulkTickets.map((ticket) => ({
//     insertOne: {
//       document: ticket,
//     },
//   }))
// );
