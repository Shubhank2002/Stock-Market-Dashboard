const express=require('express')
const { GetList } = require('../Controllers/StockController')
const StockRouter=express.Router()

StockRouter.get('/',GetList)

module.exports=StockRouter