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

exports.playInTheFirstColumn = function(test){
	var myBoard = new Board(7,6)
	
	var player1 = new Player(myBoard, "*");
	player1.play(0);
	
	test.notEqual(myBoard.getGrid()[0][0], null);
	test.notEqual(myBoard.getGrid()[0][0], undefined );
	if(myBoard.getGrid()[0][0]){
		test.equal(myBoard.getGrid()[0][0].color, "*");
	}
	test.done();
}