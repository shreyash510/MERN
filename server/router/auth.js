const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("hello router")
});

router.post("/register", (req, res)=>{
    console.log(req.body);
    res.json({message:req.body});
})

// router.get("/register", (req, res)=>{
//     res.send("hello register");
// })

router.post("")
module.exports = router;