
var Board = function(rowSize, columnSize){
	this.rowSize = rowSize;
	this.columnSize = columnSize;
	
	this.grid = new Array(rowSize);
	for(var i = 0 ; i < rowSize ; i ++){
		this.grid[i] = new Array(columnSize);
	}
};

Board.prototype.isColumnFull = function(column){
	return (this.grid[column][this.getColumnSize()-1]) ? true : false;
}


Board.prototype.addToken = function(token, column){
	var nextAvailablePosition = this.columnSize;
	for(var i = this.columnSize-1; i >= 0; i--){
		if(this.grid[column][i]){
			break;
		}
		nextAvailablePosition--;
	}
	//this.grid[nextAvailablePosition][column] = token.getColor();
	this.grid[column][nextAvailablePosition] = token;
}

Board.prototype.print = function(){
	for(var i = this.columnSize-1; i >= 0; i--){
		console.log("----------------------------");
		var entireLine = i + " : |";
		for(var j = 0; j < this.rowSize; j++){
			entireLine += (this.grid[j][i] != null && this.grid[j][i] != undefined) ? this.grid[j][i].getColor() + "|": "-|";
		}
		console.log(entireLine);
	}
	var entireLine = "    ";
	for(var i = 0; i < this.rowSize; i++){
		entireLine += " "+i;
	}
	console.log(entireLine);
}

Board.prototype.getRowSize = function(){
	return this.rowSize;
}

Board.prototype.getColumnSize = function(){
	return this.columnSize;
}

Board.prototype.getGrid = function(){
	return this.grid;
}

Board.prototype.checkWin = function(nbColumn){
	var height = 0;
	//console.log(this.grid);
	while(this.grid[nbColumn][height]){
		height++;
	};
	if(height<=0){
		return false;
	};
	var color = this.grid[nbColumn][height-1].getColor();


	//Check vertical
	for(var i = nbColumn - 3; i<= nbColumn; i++){
		if(i>=0 && i+3 <this.rowSize
			&& this.grid[i][height-1]
			&& this.grid[i+1][height-1]
			&& this.grid[i+2][height-1]
			&& this.grid[i+3][height-1]
			&& this.grid[i][height-1].getColor() === color
			&& this.grid[i+1][height-1].getColor() === color
			&& this.grid[i+2][height-1].getColor() === color
			&& this.grid[i+3][height-1].getColor() === color){

			return true;
		}
	}

	//Check horizontal
	for(var i = height - 1 - 3; i< height; i++){
		if(i>=0 && i+3 <this.columnSize
			&& this.grid[nbColumn][i]
			&& this.grid[nbColumn][i+1]
			&& this.grid[nbColumn][i+2]
			&& this.grid[nbColumn][i+3]
			&& this.grid[nbColumn][i].getColor() === color
			&& this.grid[nbColumn][i+1].getColor() === color
			&& this.grid[nbColumn][i+2].getColor() === color
			&& this.grid[nbColumn][i+3].getColor() === color){
			return true;
		}
	}


	//Check diagnal from left-low to right-high
	for(var i = 0; i<=3; i++){
		if( (nbColumn - i)  >=0 && (nbColumn + (3-i)) < this.rowSize && (height -1 -i) >= 0 && (height -1 + (3-i)) < this.columnSize
			&& this.grid[nbColumn - i][height -1 -i]
			&& this.grid[nbColumn - i + 1][height -1 -i + 1]
			&& this.grid[nbColumn - i + 2][height -1 -i + 2]
			&& this.grid[nbColumn - i + 3][height -1 -i + 3]
			&& this.grid[nbColumn - i][height -1 -i].getColor() === color
			&& this.grid[nbColumn - i + 1][height -1 -i + 1].getColor() === color
			&& this.grid[nbColumn - i + 2][height -1 -i + 2].getColor() === color
			&& this.grid[nbColumn - i + 3][height -1 -i + 3].getColor() === color){
			return true;

		}
	}

	//Check diagnal from left-high to right-low
	for(var i = 0; i<=3; i++){
		if( (nbColumn - i)  >=0 && (nbColumn + (3-i)) < this.rowSize && (height -1 + i) < this.columnSize && (height -1 - (3-i)) >= 0
			&& this.grid[nbColumn - i][height -1 +i]
			&& this.grid[nbColumn - i + 1][height -1 +i - 1]
			&& this.grid[nbColumn - i + 2][height -1 +i - 2]
			&& this.grid[nbColumn - i + 3][height -1 +i - 3]
			&& this.grid[nbColumn - i][height -1 +i].getColor() === color
			&& this.grid[nbColumn - i + 1][height -1 +i - 1].getColor() === color
			&& this.grid[nbColumn - i + 2][height -1 +i - 2].getColor() === color
			&& this.grid[nbColumn - i + 3][height -1 +i - 3].getColor() === color){
			return true;

		}
	}

	return false;
}

module.exports = Board;