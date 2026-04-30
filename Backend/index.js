require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const PackageRoutes = require("./routes/PackageRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");
const tripRoutes = require("./routes/tripRoutes");
const issueRoutes = require("./routes/issueRoutes");
const updateRoutes = require("./routes/updateRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", PackageRoutes);
app.use("/auth", AuthRoutes);
app.use("/users", UserRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/issues", issueRoutes);
app.use("/api/updates", updateRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});