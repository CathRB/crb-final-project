const fetch = require("node-fetch");
require("dotenv").config();
const key= process.env.TREFLE_API_KEY


const getCompleteDatabase = async (request, response) => {


  try {
  const getAllPlants = await fetch(`https://trefle.io/api/v1/plants?token=${key}&order[common_name]=asc`);
  const allPlants = await  getAllPlants.json();  

     if (allPlants.data.length === 0)
    return response.status(401).json({status: 401, message:`Plants database not found`});

     else 
    return response.status(200).json({status: 200, data: allPlants.data, dataMeta: allPlants.meta, message: "Plants database found"});
    
  }catch (error) {
        console.error("Error:", error.stack);
        response.status(500).json({status: 500, message: "Unknown error occured"})
    }
  
  };


module.exports = { 
    getCompleteDatabase
};



