const Feature = require("../models/feature_model");

exports.createFeature = async (req, res) => {
  try {
    const { title, description } = req.body;

    const feature = new Feature({
      title,
      description,
      createdBy: req.user.id
    });

    await feature.save();

    res.status(201).json({ message: "Feature request submitted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMyFeatures = async (req, res) => {
  const features = await Feature.find({ createdBy: req.user.id });
  res.json(features);
};
