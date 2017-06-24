function Paddle(x, y) {}
Paddle.prototype.restart = function() {};

Paddle.prototype.hitBall = function(ball_y) {};

Paddle.prototype.movePaddles = function(){
function movePaddle(event) {
  var keys = [38, 40];
  switch (event.keyCode) {
    case 38:
      if ($('#paddle1').css('margin-top') == '0px') {
        alert("this movement is not posible");
      } else {
        $("#paddle1").css("margin-top", "-=10");
      }
      break;
    case 40:
      if ($('#paddle1').css('margin-top') == '400px') {
        alert("abajo");
      } else {
        $("#paddle1").css("margin-top", "+=10");
      }
      break;
  }
}
addEventListener("keydown", movePaddle);
};
