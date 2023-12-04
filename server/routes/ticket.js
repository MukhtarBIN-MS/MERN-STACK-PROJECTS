import express from 'express';
import { generateTickets, validateTickets } from "../controllers/tickets.js";

const router = express.Router();

router.post('/generate-tickets', generateTickets);
router.patch('/use-ticket/:identifier', validateTickets);

export default router;