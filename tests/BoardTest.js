var Board = require("../services/Board.js");
var Token = require("../services/Token.js");


exports.distanceShouldBeZeroBetweenTwoEqualPoints = function(test){

	var token1 = new Token(10,10,1);
	var token2 = new Token(10,10,2);
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