app.get('/', function(req, res){
    res.sendfile('./public/home.html');
  });

app.get("./survey", function (req, res){
    res.sendFile('./public/survey.html')
});