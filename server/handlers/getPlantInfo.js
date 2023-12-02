 const fetch = require("node-fetch");
 require("dotenv").config();
 const key= process.env.TREFLE_API_KEY
 
 
 const getPlantInfo = async (request, response) => {
  const plantSlug = request.params.plantSlug;

  
   try {
   const getPlantInfo = await fetch(`https://trefle.io/api/v1/plants/${plantSlug}?token=${key}`);
   const plantInfo = await  getPlantInfo.json();  

     if (plantInfo.error)
     return response.status(404).json({status: 404, message:`${plantSlug} not found`});
 

const plantId = plantInfo.data.id
const commonName = plantInfo.data.common_name
const family = plantInfo.data.main_species.family
const vegetable = plantInfo.data.vegetable
const edible = plantInfo.data.main_species.edible
const edibleParts = plantInfo.data.main_species.edible_part
const light = plantInfo.data.main_species.growth.light
const humidity = plantInfo.data.main_species.growth.atmospheric_humidity
const phLow = plantInfo.data.main_species.growth.ph_minimum
const phHight = plantInfo.data.main_species.growth.ph_maximum
const sources = plantInfo.data.main_species.sources  
const image = plantInfo.data.image_url


     
         return response.status(200).json({status: 200, data: {plantId, commonName,family,vegetable, edible,  edibleParts, light,humidity, phLow, phHight, sources, image } ,  message: "Plant found"});
     
   }catch (error) {
         console.error("Error:", error.stack);
         response.status(500).json({status: 500, message: "Unknown error occured"})
     }
   
   };
 
 
 module.exports = { 
   getPlantInfo
 };



