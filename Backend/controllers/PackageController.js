const PackageModel = require("../model/PackageModel");
const PackageDetails = require("../model/PackageDetailsModel");


// CREATE PACKAGE
const addPackage = async (req, res) => {
  try {
    const data = await PackageModel.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// CREATE PACKAGE DETAILS
const addPackageDetails = async (req, res) => {
  try {
    const data = await PackageDetails.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET ALL PACKAGES WITH DETAILS
const getPackages = async (req, res) => {
  try {
    const data = await PackageModel.find().populate("details");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET SINGLE PACKAGE
const getPackageById = async (req, res) => {
  try {
    const data = await PackageModel.findById(req.params.id)
      .populate("details");

    if (!data) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE PACKAGE
const updatePackage = async (req, res) => {
  try {
    const updated = await PackageModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE PACKAGE DETAILS
const updatePackageDetails = async (req, res) => {
  try {
    const updated = await PackageDetails.findOneAndUpdate(
      { packageId: req.params.id }, 
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Details not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// DELETE PACKAGE + DETAILS
const deletePackage = async (req, res) => {
  try {
    const pkg = await PackageModel.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }

    // delete details
    await PackageDetails.deleteOne({ packageId: pkg._id });

    // delete package
    await PackageModel.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  addPackage,
  addPackageDetails,
  getPackages,
  getPackageById,
  updatePackage,
  updatePackageDetails,
  deletePackage
};