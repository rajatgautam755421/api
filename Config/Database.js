const { connect } = require("mongoose");

connect(
  "mongodb+srv://rajat:rajat12345@cluster0.m6swy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (error) => {
    if (!error) {
      console.log("Connected to database");
    } else {
      console.log(error);
    }
  }
);
