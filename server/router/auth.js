const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send("hello router")
});

// user registration 
router.post("/register", async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({
                error: "email already exist"
            });
        }
        const user = new User({ name, email, phone, work, password, cpassword })

        const userResister = await user.save();

        if (userResister) {
            return res.status(201).json({
                message: "user registered successfully"
            });
        } else {
            res.status(500).json({ error: "failed to register" })
        }
    } catch (err) {
        console.log(err)
    }

});

// user login 
router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Plz fill the data" });
        }
        const userLogin = await User.findOne({ email: email })
        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now()+25892000000),
                httpOnly: true
            });
            
            
            if (!isMatch) {
                res.json({ error: "invalid email" })
            } else {
                res.json({ message: "User signin Successfully" })
            }
        } else {
            res.status(400).json({ error: "Invalid creadients" });
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;