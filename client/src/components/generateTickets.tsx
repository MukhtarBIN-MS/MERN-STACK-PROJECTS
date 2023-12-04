// GenerateTickets.js
'use client';
import React, { useState } from 'react';

const GenerateTickets = () => {
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [success, setSuccess] = useState(null);

  const generateTickets = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/generate-tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numberOfTickets }),
      });

      if (response.ok) {
        console.log('Tickets generated successfully');
      } else {
        console.error('Failed to generate tickets');
      }
    } catch (error) {
      console.error('Error generating tickets', error);
    }
  };

  return (
    <div className='flex flex-col items-start '>
      <h2>Generate Tickets</h2>
      <label>
        Number of Tickets:
        <input
          type="number"
          value={numberOfTickets}
          className="w-1/2 border p-2 border-black rounded"
          onChange={(e) => setNumberOfTickets(Number(e.target.value))}
        />
      </label>
      <button className="p-3 text-center bg-green-700 rounded-lg text-white" onClick={generateTickets}>Generate</button>
    </div>
  );
};

export default GenerateTickets;
