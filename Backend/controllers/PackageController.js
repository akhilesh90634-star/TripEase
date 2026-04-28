// const PackageModel = require("../model/PackageModel");

// // GET ALL PACKAGES
// async function getPackages(req, res) {
//   try {
//     const data = await PackageModel.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch packages" });
//   }
// }

// // CREATE PACKAGE (ADMIN ONLY)
// async function createPackage(req, res) {
//   try {
//     const data = req.body;

//     const newPackage = await PackageModel.create(data);

//     res.status(201).json({
//       message: "Package created successfully",
//       package: newPackage
//     });

//   } catch (err) {
//     res.status(500).json({ message: "Failed to create package" });
//   }
// }

// // DELETE PACKAGE (ADMIN ONLY)
// async function deletePackage(req, res) {
//   try {
//     const { id } = req.params;

//     const deleted = await PackageModel.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Package not found" });
//     }

//     res.json({ message: "Package deleted successfully" });

//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete package" });
//   }
// }

// module.exports = {
//   getPackages,
//   createPackage,
//   deletePackage
// };

// const PackageModel = require("../model/PackageModel");

// // GET ALL PACKAGES
// const getPackages = async (req, res) => {
//   try {
//     const data = await PackageModel.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching packages" });
//   }
// };

// // ADD PACKAGE
// const addPackage = async (req, res) => {
//   try {
//     const result = await PackageModel.create(req.body);
//     res.json({ message: "Package added", data: result });
//   } catch (err) {
//     res.status(500).json({ message: "Error adding package" });
//   }
// };

// // DELETE PACKAGE
// const deletePackage = async (req, res) => {
//   try {
//     await PackageModel.findByIdAndDelete(req.params.id);
//     res.json({ message: "Package deleted" });
//   } catch (err) {
//     res.status(500).json({ message: "Error deleting package" });
//   }
// };

// // GET CATEGORIES (for chips)
// const getCategories = async (req, res) => {
//   try {
//     const data = await PackageModel.distinct("category");
//     res.json(["All", ...data]);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching categories" });
//   }
// };

// module.exports = {
//   getPackages,
//   addPackage,
//   deletePackage,
//   getCategories
// };

const PackageModel = require("../model/PackageModel");

// get all packages
const getPackages = async (req,res)=>{
    try{
        const data = await PackageModel.find();
        res.json(data);
    } catch(err){
        res.status(500).json({message:"Error in that packages"});
    }
};
// add packages
const addPackage=async(req,res)=>{
    try{
        const result=await PackageModel.create(req.body);
        res.json({message:"package added",data:result});
    } catch(err){
        res.status(500).json({message:"Error adding in package"});
    }
};
// delete packages
const deletePackage=async(req,res)=>{
    try{
        await PackageModel.findByIdAndDelete(req.params.id);
        res.json({message:"Package deleted"});
    } catch(err){
        res.status(500).json({message:"Error deleting package"});
    }
};
// get categories
const getCategories=async(req,res)=>{
    try{
        const data=await PackageModel.distinct("category");
        res.json(["All", ...data]);
    } catch(err){
        res.status(500).json({message:"Error fetching categories"});
    }
};

module.exports = {getPackages,addPackage,deletePackage,getCategories};
