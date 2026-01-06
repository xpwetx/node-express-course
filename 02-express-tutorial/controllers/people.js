const { people } = require("../data");

// GET all people
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

// POST new person
const addPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }

  people.push({ id: people.length + 1, name });
  res.status(201).json({ success: true, name });
};

// GET person by ID
const getPerson = (req, res) => {
  const id = Number(req.params.id);
  const person = people.find(p => p.id === id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "Person not found" });
  }

  res.status(200).json({ success: true, data: person });
};

// UPDATE person
const updatePerson = (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  const person = people.find(p => p.id === id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "Person not found" });
  }

  person.name = name;
  res.status(200).json({ success: true, data: people });
};

// DELETE person
const deletePerson = (req, res) => {
  const id = Number(req.params.id);
  const person = people.find(p => p.id === id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "No person with id ${id}" });
  }
  if (!name) {
    return res.status(400).json({ success: false, message: 'Please provide a name' });
    }
    person.name = name;

  const index = people.indexOf(person);
  people.splice(index, 1);

  res.status(200).json({ success: true, data: person });
};

module.exports = {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson
};
