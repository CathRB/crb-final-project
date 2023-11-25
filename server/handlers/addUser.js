"use strict";

const {MongoClient} = require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;
const {v4: uuidv4} = require("uuid")

const options = {useUnifiedTopology: true, useNewUrlParser: true}

const addUser = async (request, response) => {
const {firstName, lastName, email, password, confirmPassword} = request.body;

const newUser = {
    _id: uuidv4(),
    firstName,
    lastName,
    email,
    password,
    myGarden: [],
};


//Verify if password and confirm password are the same
if (password !== confirmPassword)
{return response.status(401).json({status:401, message: "Your password and confirmed password doesn't match. Please try againd"})}

 const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const usersDatabase = client.db("projectMyGarden");
    const getUser = await usersDatabase.collection("users").findOne({email: email});

    //Verify if user already exist
    if(getUser)
    return response.status(409).json({status:409, message: "Your already have an account, please go to the log in section"})
    
    await usersDatabase.collection("users").insertOne(newUser);
     response.status(201).json({status: 201, data:newUser, message: "New user created"});

} catch (error) {
    console.error(error);
    response.status(500).json({status: 500, data: {}, message: "Unknown error occured"})

    }finally{
        client.close();
        }
  };


module.exports = { 
    addUser
};

