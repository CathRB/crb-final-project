/* const fetch = require("node-fetch");
require("dotenv").config();
const key= process.env.PERINUAL_API_KEY
//console.log("key", `${key}`)
//console.log("typeof", typeof key)
//console.log("test", `https://perenual.com/api/species-list?key=${key}&q=${plantName}`)

const getPlants = async (request, response) => {
 const plantName = request.params.plantName;

 console.log("key", key)
  try {
   const fetchResponse = await fetch(`https://perenual.com/api/species-list?key=${key}&q=${plantName}`, response);
    //https://perenual.com/api/species-list?key=${key}&q=monstera
   // https://perenual.com/api/species-list?key=${key}&order=asc`
    const data = await  fetchResponse.json();   
    response.status(200).json(data);
    }catch (error) {
        console.error("Error lors de la requête API:", error.message);
        response.status(5000).json({status: 5000, error: "Erreur lors de la requête API."})
    }
    console.log("key", key)
    console.log(`https://perenual.com/api/species-list?key=${key}&q=${plantName}`)
  };


module.exports = { 
  getPlants
}; */