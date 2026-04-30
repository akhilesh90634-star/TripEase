const router = require("express").Router();
const { addUpdate, getUpdates } = require("../controllers/UpdateControllers");

router.get("/", getUpdates);
router.post("/", addUpdate);

module.exports = router;