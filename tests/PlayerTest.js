var Token = require('../services/Token.js');
var Board = require('../services/Board.js');
var Player = require('../services/Player.js');


exports.playInAWrongColumn = function(test){
	var myBoard = new Board(7,6)
	
	var player1 = new Player(myBoard, "*");
	var player2 = new Player(myBoard, "o");
	
	test.throws(function(){
		player1.play(7);
	});//Should go in error
	
	test.done();
};
