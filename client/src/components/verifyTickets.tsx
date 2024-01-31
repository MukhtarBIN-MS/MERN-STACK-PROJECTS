// VerifyTicket.js
"use client";
import React, { useState } from "react";

const VerifyTicket = () => {
  const [identifier, setIdentifier] = useState("");
  const [validationResult, setValidationResult] = useState("");

  const validateTicket = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/use-ticket/${identifier}`
      );
      console.log(response);
      if (response.status === 404) {
        setValidationResult("Ticket not found");
      } else if (response.status === 400) {
        setValidationResult("Ticket already used");
      } else if (response.status === 200) {
        setValidationResult("Ticket validated succesfully ");
      } else {
        setValidationResult("Failed to validate ticket");
      }
    } catch (error) {
      console.error("Error validating ticket", error);
      setValidationResult("Internal Server Error");
    }
  };

  return (
    <div>
      <h2>Verify Ticket</h2>
      <label>
        Identifier (Key or Serial Number):
        <input
          type="text"
          value={identifier}
          className="w-1/2 border p-2 border-black rounded"
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </label>
      <button
        className="p-3 text-center bg-green-700 rounded-lg text-white"
        onClick={validateTicket}
      >
        Validate
      </button>
      {validationResult && <p>{validationResult}</p>}
    </div>
  );
};

export default VerifyTicket;
