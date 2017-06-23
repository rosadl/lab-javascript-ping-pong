var board = new Board();

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
function moveListeners(event) {
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





$(document).ready(function() {

  document.addEventListener("keydown", moveListeners);



    // function activatePaddle2() {
    // }
  });


// function renderGame(){
// }
//
// function renderScore(){
// }
//
// function renderBall(){
// }
//
// function renderPaddle(){
// }
