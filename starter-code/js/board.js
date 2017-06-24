function Board() {
  this.i = $('#ball').css('margin-left');
}

Board.prototype.start = function() {
  paddle1 = $('#paddle1').css('margin-top', "200px");
  paddle2 = $('#paddle2').css('margin-top', "200px");
  ball.move();


};


Board.prototype.checkGame = function() {};

Board.prototype.stop = function() {};

Board.prototype.restart = function() {};

Board.prototype.gameOver = function() {};
