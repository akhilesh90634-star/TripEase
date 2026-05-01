const Update = require("../model/UpdateModel");

const addUpdate = async(req,res)=>{
  const data = await Update.create(req.body);
  res.json(data);
};

const getUpdates = async(req,res)=>{
  const data = await Update.find();
  res.json(data);
};

module.exports = { addUpdate, getUpdates };