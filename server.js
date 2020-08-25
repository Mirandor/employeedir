const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

  app.use(express.static("client/build"));


app.use(routes);

app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}!`);
});