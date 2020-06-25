const express = require("express");
const router = express.Router();
const Post = require("../../models/Posts");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

//posting a post
router.post(
  "/",
  [auth, [check("text", "text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status.json({ errors: errors.array });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();
      return res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

//get  all  post
router.get("/", auth, async (req, res) => {
  try {
    const post = await Post.find();

    return res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
//get  post  by id

router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
//delete a post a by post id
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // if (!post) {
    //   return res.status(400).json({msg:"post not found"});
    // }

    if (post.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: "user is not authorized" });
    }
    await post.remove();
    return res.json({ msg: "post removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
//like
router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // if (!post) {
    //   return res.send("post not found");
    // }
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "post already liked" });
    }
    post.likes.unshift({ user: req.user.id });

    await post.save();
    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).send("post not found");
    }
    //check user is not yet liked from likes array through filter
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "post not yet liked" });
    }
    const removeindex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);
    post.likes.splice(removeindex, 1);
    await post.save();
    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
//comment section

router.post("/comment/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.user.id);
    const newcomment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };

    post.comments.unshift(newcomment);

    await post.save();
    return res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(3);
    const comment = await post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    if (!comment) {
      res.status(400).send("comment not found");
    }
    console.log(2);
    if (comment.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: "comment needs authorization" });
    }
    console.log(1);

    const removeindex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);
    post.comments.splice(removeindex, 1);
    console.log(0);
    await post.save();
    return res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
