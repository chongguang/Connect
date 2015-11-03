var Token = require('./Token.js');

var GameManager = function(player1, player2, board){
	this.player1 = player1;
	this.player2 = player2;
	this.board = board;
	
	if(player1.color == player2.color){
		throw new Error("player1 and player2 have the same color")
	}
};

GameManager.prototype.initGame = function(){
	console.log("Welcome to our super handsome game");
};


GameManager.prototype.play = function(){
	while(){
	
	}
};



module.exports = GameManager;