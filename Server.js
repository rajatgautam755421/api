const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config({ path: "" });
require("./Config/Database");
const Port = process.env.PORT || 3000;

//Global Level Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use(logger("dev"));

//Importing Routes
const contactRoute = require("./Routes/Contact.Route");

//Configuire Routes
app.use("/api/v1", contactRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Welcome",
  });
});

app.listen(Port, () => {
  console.log("Server is up and running at 3000 🚀 ");
});
