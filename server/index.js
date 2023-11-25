"use strict";
const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");

const {getPlants} = require("./handlers/getPlants");
const {getPlantInfo} = require("./handlers/getPlantInfo");
const {getPlantsPages} = require ("./handlers/getPlantsPages");
const {addUser} = require ("./handlers/addUser")
const {getUserInfo} = require ("./handlers/getUserInfo")

express()
  .use(express.json())
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.static("public"))

  //Plant Brwoser
    .get("/api/get-plants/:plantName", getPlants)
    .get("/api/get-plantInfo/:plantSlug", getPlantInfo)
    .get("/api/get-plantsPages/:pageNumber/:plantName", getPlantsPages)
    

  //Regsiter and Log in
    .post("/api/add-user", addUser)
    .post("/api/get-userInfo/", getUserInfo)

    .listen(8000, () => {
        console.log(`Server listening on port ${8000}`)
    });




/*  //Plant Brwoser
 .get("api/get-plants/:plantName", getPlants)
 .get("api/get-plantInfo/:plantSlug", getPlantInfo)
 .get("api/get-plantsPages/:pageNumber/:plantName", getPlantsPages)
 

//Add new user
 .post("api/add-user", createUser)

 .listen(8000, () => {
     console.log(`Server listening on port ${8000}`)
 });
 */


//FONCTIONNE
 //Plant Brwoser
 /* .get("/plants/:plantName", getPlants)
 .get("/plant/:plantSlug", getPlantInfo)
 .get("/plants/:pageNumber/:plantName", getPlantsPages)
 

//Add new user
 .post("/user/:userID", createUser)

 .listen(8000, () => {
     console.log(`Server listening on port ${8000}`)
 }); */























