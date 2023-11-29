"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const {v4: uuidv4} = require("uuid")

const addPlantMyGarden = async (request, response) => {
    const {userId, plantId, commonName, scientificName, family, vegetable, edible, edibleParts, light, humidity, phLow,  phHight, sources, image} = request.body;
    const myGardenId= uuidv4()
    const client = new MongoClient(MONGO_URI);



    try {
        await client.connect();
        const usersDatabase = client.db("projectMyGarden");
     
        const addPlant = await usersDatabase.collection("users").updateOne({_id: userId}, {$push: {myGarden: {myGardenId, plantId, commonName, scientificName, family, vegetable, edible, edibleParts, light, humidity, phLow,  phHight, sources, image}}} );
        
      
      if (addPlant.matchedCount === 0) {
        return response.status(404).json({status: 404, message:"User not found"})
      }
      return  response.status(201).json({status: 201, data:{myGardenId,  plantId, commonName, scientificName, family, vegetable, edible, edibleParts, light, humidity, phLow,  phHight, sources, image}, message: "Plant successfully added to MyGarden"});
      
        
    
    } catch (error) {
        console.error(error);
        response.status(500).json({status: 500,  message: "Unknown error occured"})
    
        }finally{
            client.close();
            }

}

module.exports = {addPlantMyGarden};