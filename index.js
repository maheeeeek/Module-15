const express = require('express');
const app = express();
const port = 4000;

app.get("/get", (req,res) => {
    res.send("I am get request")
});

app.post("/post", (req,res) => {
    res.send("I am post request")
});


app.listen(port, () => {
    console.log(`Server is running in: ${port}`);
});