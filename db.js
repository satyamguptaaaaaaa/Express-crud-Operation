const mongoose= require("mongoose");


const connectToDb= async()=>{
    mongoose.connect(process.env.MONGO_USI)
    .then((conn)=>{
        console.log(`Connected to Db ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.massage);
        process.exit(1);
    })
}

module.exports=connectToDb;

////https://github.com/satyamguptaaaaaaa/Express-crud-Operation.git