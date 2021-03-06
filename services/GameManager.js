var Token = require('./Token.js');

var GameManager = function(player1, player2, board){
	this.player1 = player1;
	this.player2 = player2;
	this.board = board;
	this.currentPlayer = player1;
	
	if(this.player1.color == this.player2.color){
		throw new Error("player1 and player2 have the same color")
	}
};

GameManager.prototype.initGame = function(){
	console.log("Welcome to our super handsome game !!!");
};


GameManager.prototype.play = function(){
	
	var currentPlayer = this.whichPlayerHasToPlay();
	var referenceToThis = this;

	currentPlayer.askWhichColumn(function(answer){
		try{
			currentPlayer.play(answer);
		}catch(error){
			console.log("Sorry please retry and put a good value");
			referenceToThis.play();
			return;//We exit right now otherwise I will execute the rest of the function
		}
		
		referenceToThis.board.print();
		referenceToThis.nextPlayer();
		if(referenceToThis.checkWin(answer)){
			console.log("You've WIN sexy bitch !!");
		}else if(referenceToThis.gridIsFull()){
			console.log("Match null !!");
		}else{
			referenceToThis.play();
		}
	})
};

GameManager.prototype.whichPlayerHasToPlay = function(){
	return this.currentPlayer;
};

GameManager.prototype.nextPlayer = function(){
	if(this.currentPlayer == this.player1){
		this.currentPlayer = this.player2;
	}else{
		this.currentPlayer = this.player1;
	}
};

GameManager.prototype.gridIsFull = function(){

	for(var i = 0; i < this.board.getRowSize(); i++){
		for(var j = 0; j < this.board.getColumnSize(); j++){
			if(this.board.getGrid()[i][j] == null || this.board.getGrid()[i][j] == undefined){
				return false;
			}
		}
	}

	return true;
}

GameManager.prototype.checkWin = function(nbColumn){
	var height = 0;
	var grid = this.board.getGrid();
	//console.log(grid);
	while(grid[nbColumn][height]){
		height++;
	};
	if(height<=0){
		return false;
	};
	var color = grid[nbColumn][height-1].getColor();

	//Check vertical
	for(var i = nbColumn - 3; i<= nbColumn; i++){
		if(i>=0 && i+3 <this.board.getRowSize()
			&& grid[i][height-1]
			&& grid[i+1][height-1]
			&& grid[i+2][height-1]
			&& grid[i+3][height-1]
			&& grid[i][height-1].getColor() === color
			&& grid[i+1][height-1].getColor() === color
			&& grid[i+2][height-1].getColor() === color
			&& grid[i+3][height-1].getColor() === color){

			return true;
		}
	}

	//Check horizontal
	for(var i = height - 1 - 3; i< height; i++){
		if(i>=0 && i+3 <this.board.getColumnSize()
			&& grid[nbColumn][i]
			&& grid[nbColumn][i+1]
			&& grid[nbColumn][i+2]
			&& grid[nbColumn][i+3]
			&& grid[nbColumn][i].getColor() === color
			&& grid[nbColumn][i+1].getColor() === color
			&& grid[nbColumn][i+2].getColor() === color
			&& grid[nbColumn][i+3].getColor() === color){
			return true;
		}
	}


	//Check diagnal from left-low to right-high
	for(var i = 0; i<=3; i++){
		if( (nbColumn - i)  >=0 && (nbColumn + (3-i)) < this.board.getRowSize() && (height -1 -i) >= 0 && (height -1 + (3-i)) < this.board.getColumnSize()
			&& grid[nbColumn - i][height -1 -i]
			&& grid[nbColumn - i + 1][height -1 -i + 1]
			&& grid[nbColumn - i + 2][height -1 -i + 2]
			&& grid[nbColumn - i + 3][height -1 -i + 3]
			&& grid[nbColumn - i][height -1 -i].getColor() === color
			&& grid[nbColumn - i + 1][height -1 -i + 1].getColor() === color
			&& grid[nbColumn - i + 2][height -1 -i + 2].getColor() === color
			&& grid[nbColumn - i + 3][height -1 -i + 3].getColor() === color){
			return true;

		}
	}

	//Check diagnal from left-high to right-low
	for(var i = 0; i<=3; i++){
		if( (nbColumn - i)  >=0 && (nbColumn + (3-i)) < this.board.getRowSize() && (height -1 + i) < this.board.getColumnSize() && (height -1 - (3-i)) >= 0
			&& grid[nbColumn - i][height -1 +i]
			&& grid[nbColumn - i + 1][height -1 +i - 1]
			&& grid[nbColumn - i + 2][height -1 +i - 2]
			&& grid[nbColumn - i + 3][height -1 +i - 3]
			&& grid[nbColumn - i][height -1 +i].getColor() === color
			&& grid[nbColumn - i + 1][height -1 +i - 1].getColor() === color
			&& grid[nbColumn - i + 2][height -1 +i - 2].getColor() === color
			&& grid[nbColumn - i + 3][height -1 +i - 3].getColor() === color){
			return true;

		}
	}

	return false;
}


module.exports = GameManager;