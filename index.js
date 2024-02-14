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
    const response = await axios.get('https://www.buda.com/api/v2/markets/BTC-CLP/trades');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



