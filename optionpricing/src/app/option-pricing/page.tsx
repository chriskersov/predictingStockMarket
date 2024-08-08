"use client";

import React, { useState } from 'react';
import axios from 'axios';

const OptionPricing: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [result, setResult] = useState<{ price: number, greeks: any } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post('/api/option_price', formData);
    setResult(response.data);
  };

  return (
    <div>
      <h1>Option Pricing</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="ticker" onChange={handleChange} placeholder="Ticker" />
        <select name="optionType" onChange={handleChange}>
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>
        <input type="number" name="strikePrice" onChange={handleChange} placeholder="Strike Price" />
        <input type="date" name="expirationDate" onChange={handleChange} placeholder="Expiration Date" />
        <button type="submit">Calculate</button>
      </form>
      {result && (
        <div>
          <p>Option Price: {result.price}</p>
          {/* Display Greeks and charts */}
        </div>
      )}
    </div>
  );
}

export default OptionPricing;
