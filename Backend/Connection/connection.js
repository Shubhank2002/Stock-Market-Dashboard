const mongoose=require('mongoose')

const ConnectDB=async()=>{
    const mongo_url=process.env.MONGO_URL
    try {
        mongoose.connect(mongo_url)
        console.log('connection established')
    } catch (error) {
        console.log("connection is not established")
    }
}

module.exports=ConnectDB