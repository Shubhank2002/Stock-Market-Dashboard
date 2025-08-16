require('dotenv').config()
const express=require('express')
const ConnectDB = require('./Connection/connection')
const app=express()

const port=process.env.PORT || 8000

ConnectDB()




app.listen(port,()=>console.log('server started'))