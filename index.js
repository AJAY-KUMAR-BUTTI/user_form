const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors(corsOptions))

const dotenv = require('dotenv');
dotenv.config();

const { initDB } = require('./dbConfig');
const userRouter = require('./routes/userRouter');


initDB();

app.use(express.json());
app.use(express.urlencoded());
app.use('/', userRouter);
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(__dirname, "./client/build/index.html")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is connected on PORT ${PORT}`);
})