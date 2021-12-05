const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.get("*", (req, res) => {
    res.status(404).send("Not Found");
})

app.listen(3000, () => {
    console.log("started on port 3000");
})