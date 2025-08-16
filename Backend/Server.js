require('dotenv').config()
const express=require('express')
const cors=require('cors')
const ConnectDB = require('./Connection/connection')
const StockRouter = require('./Routes/StockRouter')
const app=express()
app.use(cors())
const port=process.env.PORT || 8000

ConnectDB()
app.use(express.json())

app.use('/stock',StockRouter)


app.listen(port,()=>console.log('server started'))