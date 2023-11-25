/* const fetch = require('node-fetch');
require("dotenv").config(); */
/* const {TREFLE_URI} = process.env;
`${TREFLE_URI}` */

/* BASE_URL = "https://trefle.io/api/v1/plants"
const requestObj = {
  key: process.env.TREFLE_API_KEY,
  q : plant_name
  };
 */
/* const getTrefleData = async () => {
  try{
  const response = await fetch("https://trefle.io/api/v1/plants?token=0o0zrK_3Prbi4pnJdLHvFvKGkPx44ctw7qXA_ddE7ZA");
  const json = await response.json();
  return {
  json
  };
  }catch (error) {
    console.log("Error:", err);
  }
}; */


/* const getIssPosition = async () => {
    try {
      const response = await request(`http://api.open-notify.org/iss-now.json`);
      const issLocation = JSON.parse(response);
      return {
        lat: issLocation.iss_position.latitude,
        lng: issLocation.iss_position.longitude,
      };
    } catch (err) {
      console.log('Error: ', err);
    }
  }; */

  //A GET "/hangman/word" endpoint that will return an object that contains the id of a random word selected from an array of words and the letterCount of the word.

/* const getAWord = (request, response) => {
  const getRamdomWordId = Math.floor(Math.random() * (1010 - 1000 + 1) + 1000)
  const findARandomWord = words.find((word) => {
    return word.id === getRamdomWordId.toString()
     })
  const getARandomWord = {id:  findARandomWord.id , letterCount: findARandomWord.letterCount}
  return response.status(200).json({status:200, data: getARandomWord})
} */

//module.exports = {getTrefleData}