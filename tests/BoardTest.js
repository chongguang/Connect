var Board = require("../services/Board.js");
var Token = require("../services/Token.js");

/*
exports.distanceShouldBeZeroBetweenTwoEqualPoints = function(test){

	var token1 = new Token(1);
	var token2 = new Token(0);
	var myBoard = new Board(10,8);

	test.equals(myBoard.getDistanceBetweenTwoPoints(token1, token2), 0);
	test.done();
}

exports.distanceWithYEqualAndXNotEqual = function(test){
	var token1 = new Token(10,10,1);
	var token2 = new Token(11,10,2);
	var myBoard = new Board(10,8);
	
	test.equals(myBoard.getDistanceBetweenTwoPoints(token1, token2), 1);
	
	test.done();
}
*/

exports.print = function(test){
	var board = new Board(4,5);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("o"), 0);
	board.print();
	test.done();
}

// Tests of constructors
exports.checkBoardSize = function(test){
	var board = new Board(4,5);
	test.equals(board.getRowSize(), 4);
	test.equals(board.getColumnSize(), 5);
	var g = board.getGrid();
	test.equals(g.length, 4);
	for(var i=0; i<4; i++){
		test.equals(g[i].length, 5);
	}
	
	test.done();
}

///////////////////////////
// Tests of checkWin()
exports.emptyBoardIsNotAWinCase = function(test){
	var board = new Board(4,5);
	test.ok(!board.checkWin(), '');
	test.done();
}

