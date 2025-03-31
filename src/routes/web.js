const express = require("express");
const router = express.Router();

const {
  getHomePage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
  updateUser,
  postDeleteUser,
} = require("../controllers/homeController");

// syntax router.Method('/route',handler);

router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);

router.get("/update/:userId", getUpdateUser);
router.post("/update", updateUser);

router.post("/delete-user/:userId", postDeleteUser);

router.get("/", getHomePage);

module.exports = router; // export default
