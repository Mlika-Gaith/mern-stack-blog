const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create Post
router.post("/post", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Post
router.put("/post/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update your posts only");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post username
router.post("/post/username", async (req, res) => {
  try {
    const old_username = req.body.old_username;
    const new_username = req.body.username;
    await Post.updateMany(
      { username: old_username },
      { $set: { username: new_username } }
    );
    res.status(200).json("Posts usernames updated");
  } catch (err) {
    res.status(500).json("Posts usernames update failed.");
  }
});

// Delete post
router.delete("/delete/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted.");
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

// Get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all posts
router.get("/", async (req, res) => {
  const username = req.query.user;
  const category = req.query.filter;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
