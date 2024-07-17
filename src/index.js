const express = require("express");
const app = express();

const { PORT } = require("./config/server.config");

const router = require("./routes/index");
const customRouter = require("./routes/customrouter");

app.use("/api", router); // to register the router object
app.use("/custom", customRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// nodemon, --watch does not track changes in .env file
// so every time you make change in .env restart server to reflect changes
