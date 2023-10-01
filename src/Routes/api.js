const express = require('express');
const router = express.Router();

const { readAdmin, createAdmin, updateAdmin, deleteAdmin } = require('../Controllers/adminController');
const { readPost, createPost, updatePost, deletePost } = require('../Controllers/postController');
const { readSubAdmin, createSubAdmin, updateSubAdmin, deleteSubAdmin } = require('../Controllers/subAdminController');
const { readUser, createUser, updateUser, deleteUser } = require('../Controllers/userController');




//Admin Controller routes
router.get("/admin" , readAdmin);
router.post("/admin" , createAdmin);
router.put("/admin" , updateAdmin);
router.delete("/admin" , deleteAdmin);


//post Controller routes
router.get("/post" , readPost);
router.post("/post" , createPost);
router.put("/post" , updatePost);
router.delete("/post" , deletePost);


//sub Admin Controller routes

router.get("/sub-admin" , readSubAdmin);
router.post("/sub-admin" , createSubAdmin);
router.put("/sub-admin" , updateSubAdmin);
router.delete("/sub-admin" , deleteSubAdmin);

//user Controller routes

router.get("/user" , readUser);
router.post("/user" , createUser);
router.put("/user" , updateUser);
router.delete("/user" , deleteUser);


module.exports = router;