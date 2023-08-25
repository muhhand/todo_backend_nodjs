const express = require('express');
const router = express.Router();
const validator = require("../middleware/authMWValidator");
const User = require("../model/UserModel");
const bcrypt = require("bcrypt");


router.post("/", validator, async (req, res) => {
    try {
        //check email
        let user = await User.findOne({ email: req.body.email }).exec();
        if (!user) res.status(400).send("not found");
        //check password
        const validPswd = await bcrypt.compare(req.body.password, user.password);
        if (!validPswd) res.status(400).send("not found");
        //config.get("jwtsec")
        const token = user.genAuthToken();
        //done
        //res.header("token", token);
        res.status(200).json({ token: token, id: user._id });
    } catch (err) {
        for (let e in err.errors) {
            console.log(err.errors[e].message);
        }
    }
});


module.exports = router;