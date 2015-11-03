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

exports.checkWhoIsPlayingForTheFirstTime = function(test){
	var myBoard = new Board(5,5);
	var player1 = new Player(myBoard,'*');
	var player2 = new Player(myBoard,'o');

	test.doesNotThrow(function(){
		var myGameManager = new GameManager(player1, player2, myBoard);
		test.equal(myGameManager.whichPlayerHasToPlay(), player1);
	});

	test.done();
};

exports.switchPlayers = function(test){
	var myBoard = new Board(5,5);
	var player1 = new Player(myBoard,'*');
	var player2 = new Player(myBoard,'o');

	test.doesNotThrow(function(){
		var myGameManager = new GameManager(player1, player2, myBoard);
		test.equal(myGameManager.whichPlayerHasToPlay(), player1);
		myGameManager.nextPlayer();
		test.equal(myGameManager.whichPlayerHasToPlay(), player2);
		myGameManager.nextPlayer();
		test.equal(myGameManager.whichPlayerHasToPlay(), player1);
	});

	test.done();
};

exports.gridIsFullAndTheirIsNoWinner = function(test){
	var myBoard = new Board(5,5);
	var player1 = new Player(myBoard,'*');
	var player2 = new Player(myBoard,'o');
	var myGameManager = new GameManager(player1, player2, myBoard);
	for(var i = 0; i < myBoard.getRowSize(); i++){
		for(var j = 0 ; j < (myBoard.getColumnSize()/4); j++){
			var currentPlayer = myGameManager.whichPlayerHasToPlay();
			currentPlayer.play(i);
			currentPlayer.play(i);
			myGameManager.nextPlayer();
			currentPlayer = myGameManager.whichPlayerHasToPlay();
			currentPlayer.play(i);
			currentPlayer.play(i);
			myGameManager.nextPlayer();
		}
	}
	
	myBoard.print();
	test.done();
};