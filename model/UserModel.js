const mongoose = require("mongoose");
const valid = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        trime: true,
        minlength: 3,
        maxlength: 15,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (val) => {
                return valid.isEmail(val);
            },
            message: "email not valid"
        }
    },
    isAdmin: { type: Boolean },
    password: {
        type: String,
        minlength: 5,
        required: true
    },

});


userSchema.method("genAuthToken", function () {
    const token = jwt.sign({ userid: this._id, adminRole: this.isAdmin }, "secretkey");
    return token;
});
/////////////////////////////////////////////////////
const User = mongoose.model("Users", userSchema);
module.exports = User;