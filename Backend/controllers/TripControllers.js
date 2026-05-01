const Trip = require("../model/TripModel");

const getTrips = async(req,res)=>{
  const data = await Trip.find();
  res.json(data);
};

const addTrip = async(req,res)=>{
  const data = await Trip.create(req.body);
  res.json(data);
};

module.exports = { getTrips, addTrip };