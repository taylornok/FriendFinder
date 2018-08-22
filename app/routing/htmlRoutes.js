//----------------------Dependencies--------------------------------
var path = require('path');


module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a GET route to home page
  app.get(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};