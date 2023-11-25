 const fetch = require("node-fetch");
 require("dotenv").config();
 const key= process.env.TREFLE_API_KEY
 
 
 const getPlantInfo = async (request, response) => {
  const plantSlug = request.params.plantSlug;

  
   try {
   const plantInfoResponse = await fetch(`https://trefle.io/api/v1/plants/${plantSlug}?token=${key}`);
   const data = await  plantInfoResponse.json();  

     if (data.error)
     return response.status(404).json({status: 404, message:`${plantSlug} not found`});
 
         return response.status(200).json({status: 200, plantData: data.data,  message: "Plant found"});
     
   }catch (error) {
         console.error("Error:", error.stack);
         response.status(500).json({status: 500, error: error.message})
     }
   
   };
 
 
 module.exports = { 
   getPlantInfo
 };



