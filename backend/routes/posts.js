const router = require("express").Router();
const {
  createPost,
  getPosts,
  getPost,
  getTimelinePosts,
  deletePost,
  updatePost,
  likePost,
} = require("../controllers/postController");

//CREATE post
router.post("/", createPost);

//UPDATE post
router.put("/:id", updatePost);

//DELETE post
router.delete("/:id", deletePost);

//LIKE a post
router.put("/:id/like", likePost);

//GET a post
router.get("/:id", getPost);

//GET timeline posts
router.get("/timeline/:userId", getTimelinePosts);

//GET all posts
router.get("/profile/:username", getPosts);

module.exports = router;
