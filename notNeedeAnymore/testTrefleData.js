
const fetch = require('node-fetch');
require("dotenv").config();
const {TREFLE_URI} = process.env;

// The parameters for our POST request
const params = {
    origin: 'http://localhost:3000/',
    ip: '192.168.0.102',
    token: process.env
  }
  
  (async () => {
    const response = await fetch(
      'https://trefle.io/api/auth/claim', {
        method: 'post',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' }
      });
    const json = await response.json();
    console.log(json);
  })();