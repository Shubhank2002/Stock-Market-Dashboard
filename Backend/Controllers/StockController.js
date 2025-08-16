const StockModel = require("../Models/StockModel");

const GetList=async(req,res)=>{
    const CompanyList=await StockModel.find({},{Symbol:1,_id:0})
    
    res.status(200).json(CompanyList)
}

module.exports={GetList}