const express = require("express");
const {MongoClient} = require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;

console.log("test", {MONGO_URI} )

const PORT = 8000;

const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
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

app.listen(PORT);