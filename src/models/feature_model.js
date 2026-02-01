const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true   // 🔥 CRITICAL BUSINESS RULE
  },
  description: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    default: "OPEN"
  }
}, { timestamps: true });

module.exports = mongoose.model("Feature", featureSchema);
