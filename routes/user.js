const express = require('express');
const router = express.Router();
const validator = require("../middleware/userMWValidator");
const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");


//register 
router.post('/', validator, async (req, res) => {

    let user = await User.findOne({ email: req.body.email }).exec();
    if (user)
        return res.status(400).send('user already registred');
    let salt = await bcrypt.genSalt(10);
    let hsdpsswd = await bcrypt.hash(req.body.password, salt);
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hsdpsswd,
        isAdmin: req.body.isAdmin
    });
    await user.save();
    //const token = user.getAuthToken()
    //done
    //res.send(token);
    res.status(200).json({ status: "done" });

});

module.exports = router;
















module.exports = router;