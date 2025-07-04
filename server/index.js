const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentMarksModel = require("./Models/StudentMarks");
const StudentGroupsDetailsModel = require("./Models/StudentGroupDetails");
const ProjectModel = require("./Models/Project");
const connect = require("./utils/database.connection");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

//-------------------------------------------------------------------------------

// Fetch doc1 marks
app.get("/students", (req, res) => {
  StudentMarksModel.find({})
    .then((studentmarks) => res.json(studentmarks))
    .catch((err) => res.json(err));
});

// Create doc1 marks
app.post("/addDocument1Marks", (req, res) => {
  StudentMarksModel.create(req.body)
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

//-------------------------------------------------------------------------------

// Update doc2 marks
app.put("/addDocument2Marks/:regNumber", (req, res) => {
  const { regNumber } = req.params;
  const { rubik01, rubik02, rubik03 } = req.body;

  // Calculate total marks
  const sumRubik01 = Array.from(String(rubik01), Number).reduce(
    (a, b) => a + b,
    0
  );
  const sumRubik02 = Array.from(String(rubik02), Number).reduce(
    (a, b) => a + b,
    0
  );
  const sumRubik03 = Array.from(String(rubik03), Number).reduce(
    (a, b) => a + b,
    0
  );
  const doc2Marks = sumRubik01 + sumRubik02 + sumRubik03;

  // Update the document marks for the specified student
  StudentMarksModel.findOneAndUpdate(
    { regNumber: regNumber },
    {
      rubik01: rubik01,
      rubik02: rubik02,
      rubik03: rubik03,
      doc2Marks: doc2Marks,
    },
    { new: true }
  )
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

// Fetch doc2 marks
app.get("/students", (req, res) => {
  StudentMarksModel.find({})
    .then((studentmarks) => res.json(studentmarks))
    .catch((err) => res.json(err));
});

// Create doc2 marks
app.post("/addDocument2Marks", (req, res) => {
  StudentMarksModel.create(req.body)
    .then((studentmarks) => res.json(studentmarks))
    .catch((err) => res.json(err));
});

//-------------------------------------------------------------------------------

// Update logbook marks
app.put("/addLogBookMarks/:regNumber", (req, res) => {
  const { regNumber } = req.params;
  const { rubik01, rubik02, rubik03 } = req.body;

  // Calculate total marks
  const sumRubik01 = Array.from(String(rubik01), Number).reduce(
    (a, b) => a + b,
    0
  );
  const sumRubik02 = Array.from(String(rubik02), Number).reduce(
    (a, b) => a + b,
    0
  );
  const sumRubik03 = Array.from(String(rubik03), Number).reduce(
    (a, b) => a + b,
    0
  );
  const logBookMarks = sumRubik01 + sumRubik02 + sumRubik03;

  // Update the document marks for the specified student
  StudentMarksModel.findOneAndUpdate(
    { regNumber: regNumber },
    {
      rubik01: rubik01,
      rubik02: rubik02,
      rubik03: rubik03,
      logBookMarks: logBookMarks,
    },
    { new: true }
  )
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

// Fetch logbook marks
app.get("/students", (req, res) => {
  StudentMarksModel.find({})
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

// Create logbook marks
app.post("/addLogBookMarks", (req, res) => {
  StudentMarksModel.create(req.body)
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

//-------------------------------------------------------------------------------

// Update Proposal Marks
app.put("/addProposalMarks/:regNumber", (req, res) => {
  const { regNumber } = req.params;
  const { rubik01, rubik02, rubik03 } = req.body;

  // Calculate total marks
  const sumRubik01 = Array.from(String(rubik01), Number).reduce(
    (a, b) => a + b,
    0
  );
  const sumRubik02 = Array.from(String(rubik02), Number).reduce(
    (a, b) => a + b,
    0
  );
  const sumRubik03 = Array.from(String(rubik03), Number).reduce(
    (a, b) => a + b,
    0
  );
  const propsalMarks = sumRubik01 + sumRubik02 + sumRubik03;

  // Update the document marks for the specified student
  StudentMarksModel.findOneAndUpdate(
    { regNumber: regNumber },
    {
      rubik01: rubik01,
      rubik02: rubik02,
      rubik03: rubik03,
      propsalMarks: propsalMarks,
    },
    { new: true }
  )
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

// Fetch proposal marks
app.get("/students", (req, res) => {
  StudentMarksModel.find({})
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

// Create proposal marks
app.post("/addProposalMarks", (req, res) => {
  StudentMarksModel.create(req.body)
    .then((studentMarks) => res.json(studentMarks))
    .catch((err) => res.json(err));
});

//-------------------------------------------------------------------------------

// Delete Student marks
app.delete("/students/:regNumber", (req, res) => {
  const regNumber = req.params.regNumber;
  ProjectModel.findByIdAndDelete(regNumber)
    .then(() => res.json({ message: "Project deleted successfully" }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

//-------------------------------------------------------------------------------

// Fetch Student Group Details
app.get("/projectgroups", (req, res) => {
  StudentGroupsDetailsModel.find({})
    .then((researchregdetails) => res.json(researchregdetails))
    .catch((err) => res.json(err));
});

//-----------------------------------------------------------------------------------

// Fetch project details
app.get("/projects", (req, res) => {
  ProjectModel.find({})
    .then((projects) => res.json(projects))
    .catch((err) => res.status(500).json({ error: err.message }));
});
