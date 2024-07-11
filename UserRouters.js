const express = require("express");
const { home, createUser, getUsers, deleteUser, editUser } = require("../controller/UserController.js");

const router = express.Router();

router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUsers);
router.put("/edituser/:id", editUser);
router.delete("/deleteuser/:id", deleteUser); // Added missing slash

module.exports = router;
