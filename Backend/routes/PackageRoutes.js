// const express = require("express");
// const router = express.Router();

// const {
//   getPackages,
//   createPackage,
//   deletePackage
// } = require("../controllers/PackageController");

// const { adminAuth } = require("../middleware/Auth");

// // PUBLIC
// router.get("/packages", getPackages);

// // ADMIN ONLY
// router.post("/packages", adminAuth, createPackage);
// router.delete("/packages/:id", adminAuth, deletePackage);

// module.exports = router;

// const express = require("express");
// const router = express.Router();

// const {
//   getPackages,
//   addPackage,
//   deletePackage,
//   getCategories
// } = require("../controllers/PackageController");

// const { adminAuth } = require("../middleware/Auth");

// // PUBLIC
// router.get("/packages", getPackages);
// router.get("/categories", getCategories);

// // ADMIN
// router.post("/packages", adminAuth, addPackage);
// router.delete("/packages/:id", adminAuth, deletePackage);

// module.exports = router;

const express = require("express");
const router = express.Router();

const{
    getPackages,
    addPackage,
    deletePackage,
    getCategories
} = require("../controllers/PackageController");

const{adminAuth}=require("../middleware/Auth");
// to the user
router.get("/packages",getPackages);
router.get("/categories",getCategories);
// for the admin
router.post("/packages",adminAuth,addPackage);
router.delete("/packages/:id",adminAuth,deletePackage);

module.exports = router;
