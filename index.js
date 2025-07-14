const express = require('express');
const app = express();
const port = 5000;

app.get("/get", (req,res) => {
    res.sendFile("I am get request")
});

app.post("/post", (req,res) => {
    res.sendFile("I am post request")
});


app.listen(port, () => {
    console.log(`Server is running in: ${port}`);
});