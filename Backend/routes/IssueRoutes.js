const router = require("express").Router();
const { getIssues, addIssue } = require("../controllers/IssueControllers");

router.get("/", getIssues);
router.post("/", addIssue);

module.exports = router;