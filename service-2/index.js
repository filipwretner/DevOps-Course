import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello from Service 2!');
});

app.listen(PORT, () => {
  console.log(`Service 2 is running on http://localhost:${PORT}`);
});
