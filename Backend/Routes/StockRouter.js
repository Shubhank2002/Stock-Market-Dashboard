const express=require('express')
const { GetList, GetStockDetails } = require('../Controllers/StockController')
const StockRouter=express.Router()

StockRouter.get('/',GetList)
StockRouter.get('/:stock',GetStockDetails)

module.exports=StockRouter