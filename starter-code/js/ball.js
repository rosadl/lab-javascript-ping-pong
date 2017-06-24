function Ball(x, y, paddle1, paddle2) {

}

Ball.prototype.randomDirection = function() {};

Ball.prototype.move = function() {
  setInterval(ball.move, 50);
  console.log("entrando a funcion");
  var aaa = parseInt($('#ball').css('margin-left'));
  console.log(aaa);
  if (aaa !== "1100px") {
    aaa += 10;
    console.log(aaa);
    $("#ball").css("margin-left", "aaa");
  }
  if ($('#ball').css('margin-top') !== "500px") {
    $("#ball").css("margin-top", "+=10px");
  }
};



Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {};
