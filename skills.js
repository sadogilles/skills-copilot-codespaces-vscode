
/* Create a web API using express and JavaScript with routes for products and customers*/
const express = require("express");
const router = express.Router();
const skills = require("../data/skills");

// GET /skills
router.get("/", async (req, res) => {
  try {
    const skillList = await skills.getAll();
    res.json(skillList);
  } catch (e) {
    res.status(500).send();
  }
});

// GET /skills/:id
router.get("/:id", async (req, res) => {
  try {
    const skill = await skills.get(req.params.id);
    res.json(skill);
  } catch (e) {
    res.status(404).json({ error: "Skill not found" });
  }
});







