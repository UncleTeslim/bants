var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hey, welcome to my first express exercise!!! Hope you enjoy the jabs :) ");
});

app.get("/epl/:club", function (req, res) {
    var slangs = {
        arsenal: "Good ebening",
        chelsea: "The Pride Of London",
        spurs: "Perennial Bottlers",
        manu: "Ole At The Wheel",
        liverpool: "Is This Our Year?"
    }
    var club = req.params.club;
    var slang = slangs[club];
    res.send(slang);
});

app.get("*", function (req, res) {
    res.send("Sorry, only epl matters:} !!!");
});

app.listen(3000, function(){
    console.log ("It worked!!");
});
