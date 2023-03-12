const router = require("express").Router();
const {
  createPost,
  getPosts,
  getPost,
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

//GET all posts (timeline)
router.get("/timeline/all", getPosts);

module.exports = router;
