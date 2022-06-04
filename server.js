const express = require ("express")
const connectDb = require("./connectDb/connectDb")
const user = require ("./route/contact")

const app = express()
app.use(express.json())
connectDb()
const port = 5000
app.use ("/api/user", user)

app.get('/', function(req, res){  res.end('Hello World');  });

app.listen(port ,  console.log (`server is connected on port ${port}`))
