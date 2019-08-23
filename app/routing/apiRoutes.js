const friends = require('../data/friends.js');

module.exports = function (app) {

    //routing home
    app.get("/api/friends", function (req, res) {
        res.JSON(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(friends)
        console.log(req.body)

       
    });

}