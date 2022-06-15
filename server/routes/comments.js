const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// Create comment
router.post("/comment", async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all comments by post id
router.get("/:id", async (req, res) => {
  const post_id = req.params.id;
  try {
    const comment = await Comment.find({ post_id });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.username === req.body.username) {
      try {
        await comment.delete();
        res.status(200).json("Comment deleted.");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete your posts only.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
