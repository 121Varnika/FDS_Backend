const Feature = require("../models/feature_model");

// GET all features
exports.getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.find()
      .populate("createdBy", "name email");

    res.json(features);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE feature status
exports.updateFeature = async (req, res) => {
  try {
    const { status } = req.body;

    const feature = await Feature.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(feature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
