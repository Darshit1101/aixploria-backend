// controllers/hubspotController.js

const db = require('../model');
const Hubspot = db.Hubspot;

// Create new record
exports.createHubspot = async (req, res) => {
  try {
    const { title, description, link, options } = req.body;
    const newHubspot = await Hubspot.create({ title, description, link, options });
    res.status(201).json(newHubspot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all records
exports.getAllHubspots = async (req, res) => {
  try {
    const hubspots = await Hubspot.findAll();
    res.json(hubspots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single record by ID
exports.getHubspotById = async (req, res) => {
  try {
    const hubspot = await Hubspot.findByPk(req.params.id);
    if (!hubspot) return res.status(404).json({ error: 'Hubspot not found' });
    res.json(hubspot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update record
exports.updateHubspot = async (req, res) => {
  try {
    const { title, description, link, options } = req.body;
    const hubspot = await Hubspot.findByPk(req.params.id);
    if (!hubspot) return res.status(404).json({ error: 'Hubspot not found' });

    await hubspot.update({ title, description, link, options });
    res.json(hubspot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete record
exports.deleteHubspot = async (req, res) => {
  try {
    const hubspot = await Hubspot.findByPk(req.params.id);
    if (!hubspot) return res.status(404).json({ error: 'Hubspot not found' });

    await hubspot.destroy();
    res.json({ message: 'Hubspot deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
