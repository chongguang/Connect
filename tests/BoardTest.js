var Board = require("../services/Board.js");
var Token = require("../services/Token.js");


exports.print = function(test){
	var board = new Board(4,5);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("o"), 0);
	board.print();
	test.done();
}

exports.checkIfColumnIsFull = function(test){
	var board = new Board(4,5);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("o"), 0);
	board.addToken(new Token("o"), 0);
	board.addToken(new Token("o"), 0);
	board.addToken(new Token("o"), 0);
	
	test.ok(board.isColumnFull(0));
	test.done();
}

exports.checkIfColumnIsNotFull = function(test){
	var board = new Board(4,5);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("o"), 0);
	board.addToken(new Token("o"), 0);
	board.addToken(new Token("o"), 0);
	test.ok(!board.isColumnFull(0));
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
	var board = new Board(7,6);
	board.addToken(new Token('*'), 0);
	board.addToken(new Token('*'), 1);
	board.addToken(new Token('*'), 2);
	board.addToken(new Token('*'), 3);
	test.ok(board.checkWin(0), 'Oups, this is a win case.');
	test.ok(board.checkWin(1), 'Oups, this is a win case.');
	test.ok(board.checkWin(2), 'Oups, this is a win case.');
	test.ok(board.checkWin(3), 'Oups, this is a win case.');
	test.done();
}

exports.testAVerticalWinCondition = function(test){
	var board = new Board(7,6);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("*"), 0);
	board.addToken(new Token("*"), 0);
	test.ok(board.checkWin(0), 'Oups, this is a win case.');
	test.done();
}

exports.testADiagnalLeftLowToRightHighWinCondition = function(test){
	var board = new Board(7,6);
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
	test.ok(board.checkWin(0), 'Oups, this is a win case.');
	test.ok(board.checkWin(1), 'Oups, this is a win case.');
	test.ok(board.checkWin(2), 'Oups, this is a win case.');
	test.ok(board.checkWin(3), 'Oups, this is a win case.');
	test.done();
}

exports.testADiagnalRightLowToLeftHighWinCondition = function(test){
	var board = new Board(7,6);
	board.addToken(new Token("*"), 3);

	board.addToken(new Token("o"), 2);
	board.addToken(new Token("*"), 2);

	board.addToken(new Token("o"), 1);
	board.addToken(new Token("o"), 1);
	board.addToken(new Token("*"), 1);

	board.addToken(new Token("o"), 0);
	board.addToken(new Token("o"), 0);
	board.addToken(new Token("o"), 0);
	board.addToken(new Token("*"), 0);
	test.ok(board.checkWin(0), 'Oups, this is a win case.');
	test.ok(board.checkWin(1), 'Oups, this is a win case.');
	test.ok(board.checkWin(2), 'Oups, this is a win case.');
	test.ok(board.checkWin(3), 'Oups, this is a win case.');
	test.done();
}

exports.testARandomCaseWithoutWinCondition = function(test){
	var board = new Board(7,6);
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
