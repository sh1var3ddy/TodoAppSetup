const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

const { PORT } = require("./config/server.config");

const apirouter = require("./routes/index");
app.use("/api", apirouter); // to register the router object

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// nodemon, --watch does not track changes in .env file
// so every time you make change in .env restart server to reflect changes
