const mongoose = require("mongoose");

const StudentGroupsDetails = new mongoose.Schema({
  researchTitle: String,
  leaderName: String,
  groupNumber: String,
  leaderRegNumber: String,
  member1RegNumber: String,
  member2RegNumber: String,
  member3RegNumber: String,
  journalName: String,
  issnNumber: String,
});
const StudentGroupsDetailsModel = mongoose.model(
  "researchregdetails",
  StudentGroupsDetails
);
module.exports = StudentGroupsDetailsModel;
