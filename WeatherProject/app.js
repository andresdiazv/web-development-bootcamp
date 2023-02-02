const express = require("express");
const { get } = require("http");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=abce4665d98310aea880d497debdc07d";
  https.get(url, function (response) {
    console.log(response.statusCode);
  });
  res.send("Server is up and running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
