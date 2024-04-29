import express from "express";
import dotnev from "dotenv";
dotnev.config();
const app = express();

const port = process.env.PORT || 3350;


app.get('/', (req, res) => {
  res.send('Your app is up and running.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});