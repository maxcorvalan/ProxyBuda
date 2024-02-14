const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://dca-buda.onrender.com' // Reemplaza esto con el origen de tu frontend
}));

app.use(express.json());

app.get('/api/trades', async (req, res) => {
  try {
    const { timestamp, limit } = req.query;
    const url = `https://www.buda.com/api/v2/markets/BTC-CLP/trades?timestamp=${timestamp}&limit=${limit || 50}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



