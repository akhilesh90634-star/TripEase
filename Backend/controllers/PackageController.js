// // const PackageModel = require("../model/PackageModel");

// // // GET ALL PACKAGES
// // async function getPackages(req, res) {
// //   try {
// //     const data = await PackageModel.find();
// //     res.json(data);
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to fetch packages" });
// //   }
// // }

// // // CREATE PACKAGE (ADMIN ONLY)
// // async function createPackage(req, res) {
// //   try {
// //     const data = req.body;

// //     const newPackage = await PackageModel.create(data);

// //     res.status(201).json({
// //       message: "Package created successfully",
// //       package: newPackage
// //     });

// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to create package" });
// //   }
// // }

// // // DELETE PACKAGE (ADMIN ONLY)
// // async function deletePackage(req, res) {
// //   try {
// //     const { id } = req.params;

// //     const deleted = await PackageModel.findByIdAndDelete(id);

// //     if (!deleted) {
// //       return res.status(404).json({ message: "Package not found" });
// //     }

// //     res.json({ message: "Package deleted successfully" });

// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to delete package" });
// //   }
// // }

// // module.exports = {
// //   getPackages,
// //   createPackage,
// //   deletePackage
// // };

// // const PackageModel = require("../model/PackageModel");

// // // GET ALL PACKAGES
// // const getPackages = async (req, res) => {
// //   try {
// //     const data = await PackageModel.find();
// //     res.json(data);
// //   } catch (err) {
// //     res.status(500).json({ message: "Error fetching packages" });
// //   }
// // };

// // // ADD PACKAGE
// // const addPackage = async (req, res) => {
// //   try {
// //     const result = await PackageModel.create(req.body);
// //     res.json({ message: "Package added", data: result });
// //   } catch (err) {
// //     res.status(500).json({ message: "Error adding package" });
// //   }
// // };

// // // DELETE PACKAGE
// // const deletePackage = async (req, res) => {
// //   try {
// //     await PackageModel.findByIdAndDelete(req.params.id);
// //     res.json({ message: "Package deleted" });
// //   } catch (err) {
// //     res.status(500).json({ message: "Error deleting package" });
// //   }
// // };

// // // GET CATEGORIES (for chips)
// // const getCategories = async (req, res) => {
// //   try {
// //     const data = await PackageModel.distinct("category");
// //     res.json(["All", ...data]);
// //   } catch (err) {
// //     res.status(500).json({ message: "Error fetching categories" });
// //   }
// // };

// // module.exports = {
// //   getPackages,
// //   addPackage,
// //   deletePackage,
// //   getCategories
// // };

// const PackageModel = require("../model/PackageModel");
// const PackageDetails = require("../model/PackageDetailsModel");

// // get all packages
// const getPackages = async (req,res)=>{
//     try{
//         const data = await PackageModel.find();
//         res.json(data);
//     } catch(err){
//         res.status(500).json({message:"Error in that packages"});
//     }
// };
// // add packages
// const addPackage=async(req,res)=>{
//     try{
//         const result=await PackageModel.create(req.body);
//         res.json({message:"package added",data:result});
//     } catch(err){
//         res.status(500).json({message:"Error adding in package"});
//     }
// };
// // delete packages
// const deletePackage=async(req,res)=>{
//     try{
//         await PackageModel.findByIdAndDelete(req.params.id);
//         res.json({message:"Package deleted"});
//     } catch(err){
//         res.status(500).json({message:"Error deleting package"});
//     }
// };
// // get categories
// const getCategories=async(req,res)=>{
//     try{
//         const data=await PackageModel.distinct("category");
//         res.json(["All", ...data]);
//     } catch(err){
//         res.status(500).json({message:"Error fetching categories"});
//     }
// };

// // // GET single package with details
// // const getPackageById = async (req, res) => {
// //   try {
// //     const {id} = req.params;

// //     const pkg = await PackageModel.findById(id)
// //       .populate("detailsId");

// //     if (!pkg) {
// //       return res.status(404).json({ message: "Package not found" });
// //     }
// //     res.json(pkg);
// //   } catch (err) {
// //     res.status(500).json({ message: "Error fetching package details" });
// //   }
// // };


// // get single package with populate
// const getPackageById = async (req, res) => {
//   try {
//     const pkg = await PackageModel.findById(req.params.id)
//       .populate("detailsId");

//     if (!pkg) {
//       return res.status(404).json({ message: "Package not found" });
//     }

//     res.json(pkg);

//   } catch (err) {
//     res.status(500).json({ message: "Error fetching package" });
//   }
// };



// // ✅ UPDATE PACKAGE (basic fields)
// const updatePackage = async (req, res) => {
//   try {
//     const updated = await PackageModel.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "Package not found" });
//     }

//     res.json({
//       message: "Package updated successfully",
//       data: updated
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



// // ✅ UPDATE PACKAGE DETAILS (using populate reference)
// const updatePackageDetails = async (req, res) => {
//   try {
//     const pkg = await PackageModel.findById(req.params.id);

//     if (!pkg) {
//       return res.status(404).json({ message: "Package not found" });
//     }

//     const updatedDetails = await PackageDetails.findByIdAndUpdate(
//       pkg.detailsId,
//       req.body,
//       { new: true }
//     );

//     res.json({
//       message: "Package details updated successfully",
//       data: updatedDetails
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// module.exports = {getPackages,addPackage,deletePackage,getCategories,getPackageById,updatePackage,updatePackageDetails};


const PackageModel = require("../model/PackageModel");
const PackageDetails = require("../model/PackageDetailsModel");


// ✅ CREATE PACKAGE
const addPackage = async (req, res) => {
  try {
    const data = await PackageModel.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ✅ CREATE PACKAGE DETAILS
const addPackageDetails = async (req, res) => {
  try {
    const data = await PackageDetails.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ✅ GET ALL PACKAGES WITH DETAILS
const getPackages = async (req, res) => {
  try {
    const data = await PackageModel.find().populate("details");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ✅ GET SINGLE PACKAGE
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


// ✅ UPDATE PACKAGE
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


// ✅ UPDATE PACKAGE DETAILS
const updatePackageDetails = async (req, res) => {
  try {
    const updated = await PackageDetails.findOneAndUpdate(
      { packageId: req.params.id }, // 👈 important
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


// ✅ DELETE PACKAGE + DETAILS
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