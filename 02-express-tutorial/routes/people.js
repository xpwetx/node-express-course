const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson
} = require("../controllers/people");

// GET all people
router.get("/", getPeople);

// POST new person
router.post("/", addPerson);

// GET person by id
router.get("/:id", getPerson);

// UPDATE person
router.put("/:id", updatePerson);

// DELETE person
router.delete("/:id", deletePerson);

module.exports = router;
