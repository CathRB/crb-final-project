
"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;


const addUserComments = async (request, response) => {
    const {userId, myGardenId , plantLocation, sunExposition, wateringFrequency,  lastWatering, fertilizerName, fertilizerFrequency, lastFertilizing,  comments} = request.body;
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        const usersDatabase = client.db("projectMyGarden");
     
        const addPlant = await usersDatabase.collection("users").updateOne({_id: userId, "myGarden.myGardenId": myGardenId}, {$set:  {"myGarden.$.plantLocation": plantLocation, "myGarden.$.sunExposition": sunExposition, "myGarden.$.wateringFrequency": wateringFrequency, "myGarden.$.fertilizerName": fertilizerName, "myGarden.$.fertilizerFrequency": fertilizerFrequency, "myGarden.$.comments": comments}} );
        
     


      if (addPlant.matchedCount === 0) {
        return response.status(404).json({status:404, message:"User or plant  not found"})
      }
      return  response.status(201).json({status: 201, data:{myGardenId, plantLocation, sunExposition, wateringFrequency, lastWatering, fertilizerName, fertilizerFrequency, lastFertilizing, comments}, message: "Plant successfully added to MyGarden"});
      
        
    
    } catch (error) {
        console.error(error);
        response.status(500).json({status: 500,  message: "Unknown error occured"})
    
        }finally{
            client.close();
            }

}

module.exports = {addUserComments};