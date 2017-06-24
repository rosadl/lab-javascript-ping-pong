var board = new Board();
var ball = new Ball();
var paddle = new Paddle();

$("#start").click(function() {
  board.start();
paddle.movePaddles();
});
//   activatePaddle2();
//   var game = setInterval(updateState, intervalTime);
//   renderGame();
// });

// function updateState(){
// }
//
// $(document).on('keydown', function(e){
// });





function renderBall() {
  ball.move();
}

$(document).ready(function() {



//
//
//   // function activatePaddle2() {
//   // }
});


// function renderGame(){
// }
//
// function renderScore(){
// }
//


// function renderPaddle(){
// }
