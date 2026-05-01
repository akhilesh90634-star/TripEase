// require("dotenv").config();
// const express = require("express");
// const cors = require("cors"); 
// const connectDB = require("./config/db");
// const PackageRoutes = require("./routes/PackageRoutes");


// const AuthRoutes = require("./routes/AuthRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// connectDB();

// app.use("/auth", AuthRoutes);
// app.use("/api", PackageRoutes);


// app.listen(5000, () => {
//   console.log("server is running in port 5000");
// });

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
// app.use("/users", UserRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/issues", issueRoutes);
app.use("/api/updates", updateRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// index.js

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// const tripRoutes = require("./routes/tripRoutes");
// const issueRoutes = require("./routes/issueRoutes");
// const updateRoutes = require("./routes/updateRoutes");

// app.use("/api/trips", tripRoutes);
// app.use("/api/issues", issueRoutes);
// app.use("/api/updates", updateRoutes);

// // Server
// app.listen(5000, () => {
//   console.log("Server Running On Port 5000");
// });