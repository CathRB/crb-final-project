
"use strict";

const {MongoClient} = require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;


const getUserInfoForSession = async (request, response) => {
const {loggedInUser} = request.body;
console.log("---", request.body)


 const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const usersDatabase = client.db("projectMyGarden");
    const userInfo = await usersDatabase.collection("users").findOne({_id: loggedInUser});
 
    if(!userInfo)
    return response.status(404).json({status:404, message: "User not found."})
    
    delete userInfo.encryptedPassword;
     response.status(200).json({status: 200, data:userInfo, message: "User connected"});

} catch (error) {
    console.error(error);
    response.status(500).json({status: 500, data: {}, message: "Unknown error occured"})

    }finally{
        client.close();
        }
  };

module.exports = {getUserInfoForSession};