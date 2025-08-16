const StockModel = require("../Models/StockModel");

const GetList=async(req,res)=>{
    const CompanyList=await StockModel.find({},{Symbol:1,_id:0})
    
    res.status(200).json(CompanyList)
}
const GetStockDetails=async(req,res)=>{
    const {stock}=req.params
    const StockDetails=await StockModel.findOne({Symbol:stock})
    res.status(200).json(StockDetails)
}
module.exports={GetList,GetStockDetails}