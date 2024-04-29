import express from "express";
const app = express();


app.get('/', (req, res) => {
  res.send('Your app is up and running.');
});

const server = app.listen(0, '0.0.0.0', () => {
  const { address, port } = server.address();
  console.log(`Server is running on ${address}:${port}`);
});