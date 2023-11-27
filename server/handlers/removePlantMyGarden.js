"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;


const removePlantMyGarden = async (request, response) => {
       const {userId, myGardenId} = request.body;
        const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        const usersDatabase = client.db("projectMyGarden");
     
        const addPlant = await usersDatabase.collection("users").updateOne({_id: userId}, {$pull: {myGarden: {myGardenId}}} );
       
      
      if (addPlant.matchedCount === 0) {
        return response.status(404).json({message:"User not found"})
      }
      
      return  response.status(200).json({status: 200, data:{}, message: "Plant successfully removed from MyGarden"});
      
        
    
    } catch (error) {
        console.error(error);
        response.status(500).json({status: 500,  message: "Unknown error occured"})
    
        }finally{
            client.close();
            }

}

module.exports = {removePlantMyGarden};