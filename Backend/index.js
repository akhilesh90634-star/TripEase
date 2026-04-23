require("dotenv").config();

const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/db");

const userRoutes = require("./routes/UserRoutes");
const adminRoutes = require("./routes/AdminRoutes");
const agentRoutes = require("./routes/AgentRoutes");

const app = express();

app.use(cors()); // add this
app.use(express.json());

connectDB();

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/agent", agentRoutes);

app.listen(5000, () => {
  console.log("server is running in port 5000");
});