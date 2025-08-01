const db = require("../model");
const Hubspot = db.Hubspot;

// Create new record
exports.createHubspot = async (req, res) => {
  try {
    const { title, description, link, options } = req.body;
    const image = `${req.file.filename}`;
    if (!req.file) {
      res.status(500).json({ message: "Image is required" });
    }
    // Convert options to array, handling string or array input
    const parsedOptions = Array.isArray(options)
      ? options.map((opt) => opt.trim()).filter((opt) => opt.length > 0)
      : typeof options === "string"
      ? options
          .replace(/^\[|\]$/g, "") // Remove brackets
          .split(",")
          .map((opt) => opt.trim())
          .filter((opt) => opt.length > 0)
      : [];

    const newHubspot = await Hubspot.create({
      title: title || "",
      description: description || "",
      link: link || "",
      options: parsedOptions,
      image,
    });
    res.status(201).json({
      success: true,
      data: {
        id: newHubspot.id,
        title: newHubspot.title,
        description: newHubspot.description,
        link: newHubspot.link,
        options: newHubspot.options,
        image: newHubspot.image,
      },
      message: "Hubspot created successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get all records
exports.getAllHubspots = async (req, res) => {
  try {
    const hubspots = await Hubspot.findAll();
    const formattedHubspots = hubspots.map((hubspot) => {
      let options = hubspot.options;
      if (
        typeof options === "string" &&
        options.startsWith("[") &&
        options.endsWith("]")
      ) {
        try {
          options = JSON.parse(options); // Parse string to array if needed
        } catch (e) {
          options = options
            .split(",")
            .map((opt) => opt.replace(/["[\]]/g, "").trim())
            .filter((opt) => opt.length > 0);
        }
      }
      return {
        id: hubspot.id,
        title: hubspot.title || "",
        description: hubspot.description || "",
        link: hubspot.link || "",
        options: Array.isArray(options) ? options : [],
        image: hubspot.image,
      };
    });
    res.json({
      success: true,
      data: formattedHubspots,
      message: "Hubspots retrieved successfully",
    });
  } catch (error) {
    console.error("Get all error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getHubspotById = async (req, res) => {
  try {
    const hubspot = await Hubspot.findByPk(req.params.id);
    if (!hubspot) {
      return res.status(404).json({
        success: false,
        error: "Hubspot not found",
      });
    }
    let options = hubspot.options;
    if (
      typeof options === "string" &&
      options.startsWith("[") &&
      options.endsWith("]")
    ) {
      try {
        options = JSON.parse(options);
      } catch (e) {
        options = options
          .split(",")
          .map((opt) => opt.replace(/["[\]]/g, "").trim())
          .filter((opt) => opt.length > 0);
      }
    }
    res.json({
      success: true,
      data: {
        id: hubspot.id,
        title: hubspot.title || "",
        description: hubspot.description || "",
        link: hubspot.link || "",
        options: Array.isArray(options) ? options : [],
      },
      message: "Hubspot retrieved successfully",
    });
  } catch (error) {
    console.error("Get by ID error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Update record
exports.updateHubspot = async (req, res) => {
  try {
    const { title, description, link, options } = req.body;
    const hubspot = await Hubspot.findByPk(req.params.id);
    if (!hubspot) {
      return res.status(404).json({
        success: false,
        error: "Hubspot not found",
      });
    }

    const parsedOptions = Array.isArray(options)
      ? options.map((opt) => opt.trim()).filter((opt) => opt.length > 0)
      : typeof options === "string"
      ? options
          .replace(/^\[|\]$/g, "") // Remove brackets
          .split(",")
          .map((opt) => opt.trim())
          .filter((opt) => opt.length > 0)
      : [];

    const image = req.file ? `${req.file.filename}` : hubspot.image;

    await hubspot.update({
      title: title || hubspot.title,
      description: description || hubspot.description,
      link: link || hubspot.link,
      options: parsedOptions,
      image,
    });

    res.json({
      success: true,
      data: {
        id: hubspot.id,
        title: hubspot.title,
        description: hubspot.description,
        link: hubspot.link,
        options: hubspot.options,
        image: hubspot.image,
      },
      message: "Hubspot updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Delete record
exports.deleteHubspot = async (req, res) => {
  try {
    const hubspot = await Hubspot.findByPk(req.params.id);
    if (!hubspot) {
      return res.status(404).json({
        success: false,
        error: "Hubspot not found",
      });
    }

    await hubspot.destroy();
    res.json({
      success: true,
      message: "Hubspot deleted successfully",
    });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
