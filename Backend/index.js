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

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", PackageRoutes);
app.use("/auth", AuthRoutes);
app.use("/users", UserRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});