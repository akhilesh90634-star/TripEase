const UserModel = require("../model/UserModel");


// CREATE USER (Admin)
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await UserModel.create({
      name,
      email,
      password,
      role
    });

    res.status(201).json({
      message: "User created",
      user
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET ALL USERS (Admin)
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET SINGLE USER (Admin OR Self)
const getUserById = async (req, res) => {
  try {
    if (
      req.userRole !== "admin" &&
      req.userId.toString() !== req.params.id
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const user = await UserModel.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE USER (Admin OR Self)
const updateUser = async (req, res) => {
  try {
    if (
      req.userRole !== "admin" &&
      req.userId.toString() !== req.params.id
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    // prevent role change by normal users
    if (req.userRole !== "admin") {
      delete req.body.role;
    }

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated",
      user
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// DELETE USER (Admin)
const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};