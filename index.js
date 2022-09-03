const express = require("express")
const app = express()
const cors = require("cors");
require('dotenv').config()
const {PORT} = process.env


app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}....`)
    console.log('To kill API press CTRL + C')
})