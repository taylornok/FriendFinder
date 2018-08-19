var allFriends = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(allFriends);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in allFriends array
    var newScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<allFriends.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newScores.length; j++){
        scoresDiff += (Math.abs(parseInt(allFriends[i].scores[j]) - parseInt(newScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var userMatch = allFriends[bestMatch];
    res.json(userMatch);

    //pushes new submission into the friendsList array
    allFriends.push(req.body);
  });
};