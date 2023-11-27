
"use strict";

const {MongoClient} = require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;
const bcrypt = require('bcrypt');

const getUserInfo = async (request, response) => {
const {email, password} = request.body;


 const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const usersDatabase = client.db("projectMyGarden");
    const userInfo = await usersDatabase.collection("users").findOne({email: email});
 
    if(!userInfo)
    return response.status(404).json({status:404, message: "Invalide email or password please try again or go to register section if you don't have an account."})
    

    const verifyPasswords = await bcrypt.compare(password, userInfo.encryptedPassword);

    //Verify if user already exist //Verify if encrypted password and password are the same //split
    if(!verifyPasswords)
    return response.status(404).json({status:404, message: "Invalide email or password please try again or go to register section if you don't have an account."})
    
    delete userInfo.encryptedPassword;
     response.status(200).json({status: 200, data:userInfo, message: "User connected"});

} catch (error) {
    console.error(error);
    response.status(500).json({status: 500, data: {}, message: "Unknown error occured"})

    }finally{
        client.close();
        }
  };

module.exports = {getUserInfo};
