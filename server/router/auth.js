const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("hello router")
});

router.post("/register", (req, res)=>{

const {name, email,phone, work, password, cpassword} = req.body;

    console.log(name);
    console.log(email);

    // res.json({message:req.body});
});

// router.get("/register", (req, res)=>{
//     res.send("hello register");
// })

module.exports = router;