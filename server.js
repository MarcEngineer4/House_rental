const express= require("express");

const app=express();

app.use(express.static("public"))
app.get("/", function (req,res) {
    res.sendFile(__dirname + "/index.html");
})
app.get("/proprietes", function (req,res) {
    res.sendFile(__dirname + "/proprietes.html");
})
app.get("/details", function (req,res) {
    res.sendFile(__dirname + "/details.html");
})
app.listen(3000, function () {
    console.log("Server is Up and running..")
})


