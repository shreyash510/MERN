const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res)=>{
    res.send("hello router")
});

router.post("/register", async (req, res)=>{

const {name, email,phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
            return res.status(422).json({error: "plz filled the field properly"});
    }

    try{
        const userExist = await User.findOne({email:email})
            if(userExist){
                return res.status(422).json({
                    error: "email already exist"
                });
            }
            const user = new User({name, email, phone, work ,password, cpassword})
          
            const userResister = await user.save();
                if(userResister){
                    return res.status(201).json({
                        message : "user registered successfully"
                    });
                }else{
                    res.status(500).json({error: "failed to register"})
                }
    }catch(err){
        console.log(err)
    }

});

module.exports = router;