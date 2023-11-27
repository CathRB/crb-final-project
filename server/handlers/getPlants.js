
const fetch = require("node-fetch");
require("dotenv").config();
const key= process.env.TREFLE_API_KEY


const getPlants = async (request, response) => {
 const plantName = request.params.plantName;

  try {
  const getPlants = await fetch(`https://trefle.io/api/v1/plants/search?token=${key}&q=${plantName}`);
  const plants = await  getPlants.json();  
     if (plants.data.length === 0)
    return response.status(404).json({status: 404, message:`${plantName} not found, please try something else`});

     else 
    return response.status(200).json({status: 200, data: plants.data, dataMeta: plants.meta, message: "Plant found"});
    
  }catch (error) {
        console.error("Error:", error.stack);
        response.status(500).json({status: 500, error: error.message})
    }
  
  };


module.exports = { 
  getPlants
};











