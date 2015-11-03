var Board = require("./services/Board.js");
var Token = require("./services/Token.js");
var Player = require("./services/Player.js");

var myBoard = new Board(7,6)
	
var player1 = new Player(myBoard, "*");
var player2 = new Player(myBoard, "o");

player2.askWhichColumn(function(answer){
	player1.play(answer);
	myBoard.print();
});


