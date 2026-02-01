const Feature = require("../models/feature_model");

exports.getAllFeatures = async (req, res) => {
  const features = await Feature.find().populate("createdBy", "name email");
  res.json(features);
};
