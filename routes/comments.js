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

// deleting comments
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
// updating comments ownership
router.post("/comment/update", async (req, res) => {
  try {
    const old_username = req.body.old_username;
    const new_username = req.body.new_username;
    const old_profil_picture = req.body.old_profil_picture;
    const new_profil_picture = req.body.new_profil_picture;
    await Comment.updateMany(
      { username: old_username },
      { $set: { username: new_username } }
    );
    await Comment.updateMany(
      { profilPicture: old_profil_picture },
      { $set: { profilPicture: new_profil_picture } }
    );
    res.status(200).json("Comments updated.");
  } catch (err) {
    res.status(500).json("Error updating comments.");
  }
});
module.exports = router;
