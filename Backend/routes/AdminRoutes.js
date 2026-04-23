const express = require("express");
const router = express.Router();

const { adminLogin } = require("../controllers/AdminControllers");

router.post("/login", adminLogin);

module.exports = router;