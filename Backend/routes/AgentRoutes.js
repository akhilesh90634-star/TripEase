const router = require("express").Router();
const { getProfile, updateProfile } = require("../controllers/AgentControllers");

router.get("/:id", getProfile);
router.put("/:id", updateProfile);

module.exports = router;