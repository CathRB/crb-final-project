 //to use to acces pages
 // const fetchResponse = await fetch(`https://trefle.io/api/v1/plants/search?token=${key}&page=2&q=${plantName}`);

 const fetch = require("node-fetch");
 require("dotenv").config();
 const key= process.env.TREFLE_API_KEY
 
 
 const getPlantsPages = async (request, response) => {
  const plantName = request.params.plantName;
  const pageNumber = request.params.pageNumber;
   
   try {
   const plantInfoResponse = await fetch(`https://trefle.io/api/v1/plants/search?token=${key}&page=${pageNumber}&q=${plantName}`);
   const data = await  plantInfoResponse.json();  

     if (data.error)
     return response.status(404).json({status: 404, message:`Page ${pageNumber} not found`});
 
         return response.status(200).json({status: 200, plantsPages: data.data,  message: "Plant found"});
     
   }catch (error) {
         console.error("Error:", error.stack);
         response.status(500).json({status: 500, error: error.message})
     }
   
   };
 
 
 module.exports = { 
  getPlantsPages
 };
