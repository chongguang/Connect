var Token = require('./Token.js');
var readline = require('readline');

var Player = function(board, color){
	this.board = board;
	this.color = color;
};

Player.prototype.play = function(column){

	if(column >= 0 && column < this.board.getRowSize() && !this.board.isColumnFull(column)){
		this.board.addToken(new Token(this.color),column);
	}else{
		throw new Error("Please enter a good value");
	}

	
};

Player.prototype.askWhichColumn = function(callback){
	var userInput = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});
	userInput.question("In which column you want to play? ", function(answer) {
		userInput.close();
		callback(answer);
	});
};

Object.defineProperty(Player, "color", {
  get: function() {return this.color },
  set: function(color) { this.color = color }
});

module.exports = Player;