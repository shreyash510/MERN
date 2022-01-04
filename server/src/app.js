const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// middleware
const middleware = (req, res, next) => {
    console.log("hello, i'm middleware");
    next();
}

const db = 'mongodb+srv://shreyash510:skcoder510@cluster0.xymkp.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(db, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log("connection successful")
}).catch((err) => {
    console.log(err)
})


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