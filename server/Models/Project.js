const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  specialization: String,
  projectName: String,
  year: String,
  attachFile: String,
  description: String,
});

const ProjectModel = mongoose.model("projects", projectSchema);
module.exports = ProjectModel;
