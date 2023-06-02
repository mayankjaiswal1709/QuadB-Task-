const express = require('express')
const app = express();
require('dotenv').config()
const cors = require('cors');
require('./models/config')
const router = require('./routes/tickerRoutes')

app.use(cors());

app.use(express.json());

app.use("/", router)


app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on Port ${process.env.PORT}`);
})