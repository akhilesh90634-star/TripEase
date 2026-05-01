const Issue = require("../model/IssueModel");

const getIssues = async(req,res)=>{
  const data = await Issue.find();
  res.json(data);
};

const addIssue = async(req,res)=>{
  const data = await Issue.create(req.body);
  res.json(data);
};

module.exports = { getIssues, addIssue };