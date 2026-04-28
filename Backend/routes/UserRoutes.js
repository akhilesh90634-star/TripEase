const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/UserControllers");

const {
  adminAuth,
  userOrAdminAuth
} = require("../middleware/Auth");


// CREATE → Admin
router.post("/", adminAuth, createUser);

// GET ALL → Admin
router.get("/", adminAuth, getAllUsers);

// GET ONE → Admin or Self
router.get("/:id", userOrAdminAuth, getUserById);

// UPDATE → Admin or Self
router.put("/:id", userOrAdminAuth, updateUser);

// DELETE → Admin
router.delete("/:id", adminAuth, deleteUser);


module.exports = router;