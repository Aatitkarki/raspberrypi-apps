const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});

