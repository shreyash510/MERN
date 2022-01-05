const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config({path: './src/config.env'});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// password hashing 
userSchema.pre('save', async function (next) {
    // console.log("hii... from the outside");
    if (this.isModified('password')) {
        // console.log('password decrypt successfully')
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

// generating token
userSchema.methods.generateAuthToken = async function() {
    try {
        let newToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    
        this.tokens = this.tokens.concat({ token: newToken });
        await this.save();
        return newToken;
    } catch (e) {
        console.log(e);
    }
}

const User = mongoose.model('USER', userSchema);
module.exports = User;