const express = require('express');
const app = express();
const cors = require('cors');

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

const PORT = 8000;

app.listen(8000, () => {
    console.log(`server is connected on PORT ${PORT}`);
})