const require('path');

module.exports = function (app, root){

app.get('/', function(req, res){
    res.sendfile(path.join(__dirname, './public/home.html'));
  });

app.get("./survey", function (req, res){
    res.sendFile(path.join(__dirname, './public/survey.html'));
});

app.get('/asset/:item', function (req, res){
  res.sendFile(path.join(__dirname, ''))
})


};