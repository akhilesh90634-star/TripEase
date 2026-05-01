const express = require("express");
const router = express.Router();

const {
  getPackages,
  addPackage,
  deletePackage,
  getPackageById,
  updatePackage,
  updatePackageDetails,
  addPackageDetails
} = require("../controllers/PackageController");

const { adminAuth } = require("../middleware/Auth");

// PUBLIC
router.get("/packages", getPackages);
router.get("/packages/:id", getPackageById);

// ADMIN
router.post("/packages", adminAuth, addPackage);
router.post("/packages/details", adminAuth, addPackageDetails);

router.put("/packages/:id", adminAuth, updatePackage);
router.put("/packages/:id/details", adminAuth, updatePackageDetails);

router.delete("/packages/:id", adminAuth, deletePackage);

module.exports = router;