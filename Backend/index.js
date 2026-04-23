// let express = require("express")
// //we will now import mongoose it is a data base integration library used to integrate our database
// let mongoose = require("mongoose")

// let app = express();
// app.use(express.json());//it is a middleware used for the body which is coming from the front-end and we will convert that body to the json

// app.listen(5000,()=>{
//     console.log("server is running in prt 5000");
// })

// let express = require("express");
// let mongoose = require("mongoose");
// require("dotenv").config(); // 👈 VERY IMPORTANT

// const connectDB = require("./config/db"); // adjust path if needed

// let app = express();

// app.use(express.json());

// // 👇 CALL the database connection
// connectDB();

// app.listen(5000, () => {
//   console.log("server is running in port 5000");
// });


require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(express.json());

// ✅ connect database
connectDB();

// ✅ connect routes
app.use("/api", userRoutes);

app.listen(5000, () => {
  console.log("server is running in port 5000");
});