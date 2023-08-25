const mongoose = require("mongoose");
const valid = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    userid: {
        type: String,

        required: true
    },

});


/////////////////////////////////////////////////////
const User = mongoose.model("notes", userSchema);
module.exports = User;