function Ball(x, y, paddle1, paddle2) {

}

Ball.prototype.randomDirection = function() {};

Ball.prototype.move = function() {
  while ($('#ball').css('margin-left')=="0px") {
    $("#ball").css("margin-left","1100px");
  }
};



Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {};
