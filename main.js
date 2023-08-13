const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.post('/store-data', (req, res) => {
  const data = req.body; // Data sent from the client
  // Store the data in your preferred storage (database, file, etc.)
  console.log('Received data:', data);
  res.status(200).json({ message: 'Data received and stored.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
