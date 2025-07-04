const mongoose = require("mongoose");

const StudentMarksSchema = new mongoose.Schema({
  regNumber: String,
  doc1Marks: Number,
  doc2Marks: Number,
  logBookMarks: Number,
  propsalMarks: Number,
});
const StudentMarksModel = mongoose.model("StudentMarks", StudentMarksSchema);
module.exports = StudentMarksModel;
