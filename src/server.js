// server.js
import express from 'express';
import fs from 'fs';
import csv from 'csv-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

let doctors = [];

// Read CSV and load data into memory
fs.createReadStream('doctors.csv')
  .pipe(csv())
  .on('data', (row) => {
    doctors.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

// API endpoint to search doctors
app.get('/search', (req, res) => {
  const query = req.query.query?.toLowerCase();

  if (!query) return res.status(400).json({ message: 'Query parameter is required' });

  const results = doctors.filter((doc) => {
    return (
      doc['Name']?.toLowerCase().includes(query) ||
      doc['Specialization']?.toLowerCase().includes(query) ||
      doc['Location']?.toLowerCase().includes(query) ||
      doc['Degrees']?.toLowerCase().includes(query)
    );
  });

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
