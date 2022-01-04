const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res)=>{
    res.send("hello")
})
app.get("/about", (req, res)=>{
    res.send("about")
})
app.get("/contact", (req, res)=>{
    res.send("contact")
})
app.get("/signin", (req, res)=>{
    res.send("login")
})
app.get("/signup", (req, res)=>{
    res.send("resister")
})


app.listen(port, ()=>{
    console.log("listening...");
})