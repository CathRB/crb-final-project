"use strict";
const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");
const PORT = 8000;

const {getPlants} = require("./handlers/getPlants");
const {getPlantInfo} = require("./handlers/getPlantInfo");
const {getPlantsPages} = require ("./handlers/getPlantsPages");
const {addUser} = require ("./handlers/addUser");
const {getUserInfo} = require ("./handlers/getUserInfo");
const {addPlantMyGarden} = require ("./handlers/addPlantMyGarden");
const {removePlantMyGarden} = require ("./handlers/removePlantMyGarden");
const {getUserInfoForSession} = require ("./handlers/getUserInfoForSession")
const {addUserComments} = require ("./handlers/addUserComments")
const {getCompleteDatabase} = require ("./handlers/getCompleteDatabase")

express()
  .use(express.json())
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.static("public"))

  //Plant Brwoser
    .get("/api/get-plants/:plantName", getPlants)
    .get("/api/get-plantInfo/:plantSlug", getPlantInfo)
    .get("/api/get-plantsPages/:pageNumber/:plantName", getPlantsPages)
   
    //Plant Brwoser (get all plants in the database in asc. oderder of common name)
    .get("/api/get-complete-database", getCompleteDatabase)
    

  //Regsiter and Log in
    .post("/api/add-user", addUser)
    .post("/api/get-userInfo", getUserInfo)
    .post("/api/get-userInfo-for-session", getUserInfoForSession)

  //MyGarden
  .patch("/api/add-plant-myGarden", addPlantMyGarden)
  .patch("/api/remove-plant-myGarden", removePlantMyGarden)
  .patch("/api/add-user-comments", addUserComments)

    .listen(8000, () => {
        console.log("Server listening on port", PORT)
    });