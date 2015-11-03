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
	test.ok(!board.checkWin(1), 'Oups empty board should not have a winner');
	test.done();
}


exports.testAHorizentalWinCondition = function(test){
	var board = new Board(6,7);
	board.addToken(new Token('*'), 0);
	board.addToken(new Token('*'), 1);
	board.addToken(new Token('*'), 2);
	board.addToken(new Token('*'), 3);
	console.log("testAHorizentalWinCondition");
	board.print();
	test.ok(board.checkWin(0), 'Oups, this is a win case.');
	test.done();
}

exports.testAVerticalWinCondition = function(test){
	var board = new Board(6,7);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("*"), 0);
	console.log("testAVerticalWinCondition");
	board.print();
	test.ok(board.checkWin(0), 'Oups, this is a win case.');
	test.done();
}

exports.testADiagnalWinCondition = function(test){
	var board = new Board(6,7);
	board.addToken(new Token("*"), 0);

	board.addToken(new Token("o"), 1);
	board.addToken(new Token("*"), 1);

	board.addToken(new Token("o"), 2);
	board.addToken(new Token("o"), 2);
	board.addToken(new Token("*"), 2);

	board.addToken(new Token("o"), 3);
	board.addToken(new Token("o"), 3);
	board.addToken(new Token("o"), 3);
	board.addToken(new Token("*"), 3);
	//console.log(board.getGrid());
	//board.print();
	//test.ok(board.checkWin(1), 'Oups, this is a win case.');
	test.done();
}

exports.testARandomCaseWithoutWinCondition = function(test){
	var board = new Board(6,7);
	board.addToken(new Token("*"), 4);

	board.addToken(new Token("o"), 1);
	board.addToken(new Token("*"), 1);

	board.addToken(new Token("o"), 2);
	board.addToken(new Token("o"), 2);
	board.addToken(new Token("*"), 2);

	board.addToken(new Token("o"), 3);
	board.addToken(new Token("o"), 3);
	board.addToken(new Token("o"), 3);
	board.addToken(new Token("*"), 3);
	//console.log(board.getGrid());
	//board.print();
	test.ok(!board.checkWin(0), 'Oups, this is not a win case.');
	test.done();
}





//Tests for addToken
exports.addingASingleToken = function(test){
	var board = new Board(4,5);
	board.addToken(new Token("*"),0);
	test.equals(board.getGrid()[0][0].getColor(), "*");
	test.done();
}

exports.addingATwoTokenOneAboveTheOther = function(test){
	var board = new Board(4,5);
	board.addToken(new Token("*"),0);
	board.addToken(new Token("o"),0);
	test.equals(board.getGrid()[0][0].getColor(), "*");
	test.equals(board.getGrid()[0][1].getColor(), "o");
	test.done();
}

exports.addingATokenInAColumnWhichDoNotExist = function(test){
	var board = new Board(4,5);
	test.throws(function(){
		board.addToken(new Token("*"),4);
	});
	test.done();
}

//End Tests for addToken
