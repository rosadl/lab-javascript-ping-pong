var board = new Board();
var ball = new Ball();

$("#start").click(function() {
  board.start();
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
        alert("this movement is not posible");
      } else {
        $("#paddle1").css("margin-top", "+=10");
      }
      break;
  }

}




function renderBall(){
    ball.move();
}

$(document).ready(function() {

  document.addEventListener("keydown", movePaddle);
renderBall();


  // function activatePaddle2() {
  // }
});


// function renderGame(){
// }
//
// function renderScore(){
// }
//


// function renderPaddle(){
// }
