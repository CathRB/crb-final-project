

/* const express = require("express");
const fetch = require("node-fetch");
const axios = require('axios');
const {MongoClient} = require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;




const PORT = 8000;

const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const apiUrl = 'https://trefle.io/api/v1';

const app = express()

app.get("/api/test", (request, response) => {
    response.json({message: "You hit the end point!"})
})

app.get("/api/people", async (request, response) => {
 const client = new MongoClient(MONGO_URI, mongoOptions);
 try {
    await client.connect()
    const result = await client.db("final-project").collection("people").find().toArray()
response.json(result) 

}
 catch (error){
    console.log(error);
    response.status(400).json({message: "something went wrong"})

 }
 finally {
    client.close()
 }
})

//Trefle
app.get("/api/plants/:common_name", async (request, response) => {

    const plantId = request.params.common_name;

    try {
    const fetchResponse = await fetch(`https://perenual.com/api/species-list?key=${process.env.PERINUAL_API_KEY}&q=${plantId}`, response);
    const data = await  fetchResponse.json();   
    response.status(200).json(data);
    }catch (error) {
        console.error("Error lors de la requête API:", error.message);
        response.status(5000).json({status: 5000, error: "Erreur lors de la requête API."})
    }
});


//Perinual

/* 
axios.get("https://perenual.com/api/species-list?key=sk-MmCe655121d8563372934")
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
}); */

//app.listen(PORT); */