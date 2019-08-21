const home = require('./public/home.html');

const survey = require("./public/survey.html");


module.exports = function (app) {

//routing home
app.get("/api/friends", function (req, res){
    return res.JSON(home);
});

//routing to survey??
// app.get("/api/", function (req, res){
//     return res.JSON(survey);
// });

app.post("/api/friends", function(req, res) {
    home.length = 0;
}

}