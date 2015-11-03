var Board = require("./services/Board.js");
var Token = require("./services/Token.js");
var Player = require("./services/Player.js");
var GameManager = require("./services/GameManager.js");

var myBoard = new Board(7,6)
	
var player1 = new Player(myBoard, "*");
var player2 = new Player(myBoard, "o");
var myGameManager = new GameManager(player1, player2, myBoard);

myGameManager.initGame();
myGameManager.play();



