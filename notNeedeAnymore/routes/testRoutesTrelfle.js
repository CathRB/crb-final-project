/* "use strict";

const express = require("express");
const morgan = require("morgan");

const {getTrefleData} = require("../handlers/testFetchTrefle")

express()
  .use(express.json())
  .use(morgan("tiny"))
  //Not exactly sure what this one does. I copied it from a previous project.
  //Original comment said: Any requests for static files will go into the public folder
  .use(express.static("public"))

//A GET endpoint that accepts url in its url. If it's provided, it will return the trefle data
.get("/getData",getTrefleData)


// Catches all error response
.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(8000, () => {
    console.log(`Server listening on port ${8000}`);
  }); */
