var Token = require('./Token.js');
var readline = require('readline');

var Player = function(board, color){
	this.board = board;
	this.color = color;
};

Player.prototype.play = function(column){
	this.board.addToken(new Token(this.color),column);
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

Object.defineProperties(Player, {
    "color": { get: function () { return this.color; } },
    "c": { set: function (x) { this.color = color; } }
});

module.exports = Player;