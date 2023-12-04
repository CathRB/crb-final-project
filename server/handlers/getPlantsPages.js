
 const fetch = require("node-fetch");
 require("dotenv").config();
 const key= process.env.TREFLE_API_KEY
 
 
 const getPlantsPages = async (request, response) => {
  const plantName = request.params.plantName;
  const pageNumber = request.params.pageNumber;
   
   try {
   const getPlantsPages = await fetch(`https://trefle.io/api/v1/plants/search?token=${key}&page=${pageNumber}&q=${plantName}`);
   const plantsPages = await  getPlantsPages.json();  

     if (plantsPages.error)
     return response.status(404).json({status: 404, message:`Page ${pageNumber} not found`});
 
        return response.status(200).json({status: 200, data: plantsPages.data,  message: "Plant found"});
     
   }catch (error) {
         console.error("Error:", error.stack);
         response.status(500).json({status: 500, message: "Unknown error occured"})
     }
   
   };
 
 
 module.exports = { 
  getPlantsPages
 };
