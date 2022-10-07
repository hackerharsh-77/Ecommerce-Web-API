const express = require('express');
const app =express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(process.env.PORT || 8080,()=>{
    console.log("server is running on port 8080");
});
