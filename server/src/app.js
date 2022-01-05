const express = require('express');
const app = express();
require("../db/conn");
const User = require("../model/userSchema");
const port = process.env.PORT || 8000;

// middleware
const middleware = (req, res, next) => {
    console.log("hello, i'm middleware");
    next();
}

app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/about", middleware, (req, res) => {
    res.send("about")
})
app.get("/contact", (req, res) => {
    res.send("contact")
})
app.get("/signin", (req, res) => {
    res.send("login")
})
app.get("/signup", (req, res) => {
    res.send("resister")
})

app.listen(port, () => {
    console.log(`listening...${port}`);
})