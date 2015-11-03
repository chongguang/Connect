var Player = require('../services/Player.js');
var Board = require('../services/Board.js');
var GameManager = require('../services/GameManager.js');

exports.initiateAGameWithTwoPlayers = function(test){
	var myBoard = new Board(5,5);
	var player1 = new Player(myBoard,'*');
	var player2 = new Player(myBoard,'o');

	test.doesNotThrow(function(){
		var myGameManager = new GameManager(player1, player2, myBoard);
	});
	
	test.done();
}

exports.initiateAGameWithTwoPlayersWithTheSameColor = function(test){
	var myBoard = new Board(5,5);
	var player1 = new Player(myBoard,'*');
	var player2 = new Player(myBoard,'*');

	test.throws(function(){
		var myGameManager = new GameManager(player1, player2, myBoard);
	});
	
	test.done();
}