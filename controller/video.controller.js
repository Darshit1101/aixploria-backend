const db = require("../model");
const Video = db.Video;

exports.createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ message: "Failed to create video", error: err });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.findAll({
      order: [['createdAt', 'DESC']], // ✅ newest videos first
    });

    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch videos", error: err });
  }
};


exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.id);

    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: "Error fetching video", error: err });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const [updated] = await Video.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Video not found" });
    const updatedVideo = await Video.findByPk(req.params.id);
    res.json(updatedVideo);
  } catch (err) {
    res.status(500).json({ message: "Error updating video", error: err });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const deleted = await Video.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Video not found" });
    res.json({ message: "Video deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting video", error: err });
  }
};
