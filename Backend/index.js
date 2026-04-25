require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/db");

const AuthRoutes = require("./routes/AuthRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", AuthRoutes);


app.listen(5000, () => {
  console.log("server is running in port 5000");
});