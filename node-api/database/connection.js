const mongoose = require('mongoose');

module.exports = async () => {
    try{
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
        console.log("Database connected");
    }catch(error)
    {
        console.log("error: ", error);
        throw new Error(error);
    } 
}

// cloud mongoDB

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://user1:<Pass!234>@cluster0.vl2la.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });