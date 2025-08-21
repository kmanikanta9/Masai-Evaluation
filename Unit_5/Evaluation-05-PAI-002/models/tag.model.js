const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

const TagModel = mongoose.model("Tag", tagSchema);

module.exports = TagModel;
