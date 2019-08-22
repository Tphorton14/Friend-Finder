const home = require('./public/home.html');

const survey = require("./public/survey.html");


module.exports = function (app) {

    //routing home
    app.get("/api/friends", function (req, res) {
        return res.JSON(home);
    });


    // routing survey
    app.get("/api/friends", function (req, res) {
        return res.JSON(survey);
    });


    app.post("/api/friends", function (req, res) {

        if (survey){
            survey.push(req.body)
            return res.json(true);
        } else {
            res.json(false);
        }
        

        //req.body = {userData}

    });

}