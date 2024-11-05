const express = require("express");
const router = express.Router();
const {
    registerUser,
    // loginUser
}=require("../controller/userControler");
router.post("/register" , registerUser);
module.exports=router;
