const Agent = require("../model/AgentModel");

const getProfile = async(req,res)=>{
  const data = await Agent.findById(req.params.id);
  res.json(data);
};

const updateProfile = async(req,res)=>{
  const data = await Agent.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.json(data);
};

module.exports = { getProfile, updateProfile };