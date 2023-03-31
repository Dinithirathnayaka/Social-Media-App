const router = require("express").Router();

const {
  getUser,
  deleteUser,
  updateUser,
  followUser,
  unfollowUser,
} = require("../controllers/userController");

//GET a user
router.get("/", getUser);

//UPDATE a user
router.put("/:id", updateUser);

//DELETE a user
router.delete("/:id", deleteUser);

//FOLLOW a user
router.put("/:id/follow", followUser);

//UNFOLLOW a user
router.put("/:id/unfollow", unfollowUser);

module.exports = router;
