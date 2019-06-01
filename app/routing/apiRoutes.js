const path = require("path");

const friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);
    var newUser = req.body;

    for(var i = 0; i < newUser.scores.length; i++) {
      newUser.scores[i] = parseInt(newUser.scores[i]);
    }
    var bestFriend = '';
    var maxDifference = 40;

    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var scoreDifference = Math.abs(newUser.scores[j] - friends[i].scores[j]);
        totalDifference += scoreDifference;
      }

      if(totalDifference < maxDifference) {
        bestFriend = i;
        maxDifference = totalDifference;
      }
    }

    // adds the new user to friends array
    friends.push(newUser);
    // sends response with closest match
    res.json(friends[bestFriend]);
  });
};