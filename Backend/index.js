require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", AuthRoutes);
app.use("/users", UserRoutes);

app.listen(5000, () => {
  console.log("server is running in port 5000");
});