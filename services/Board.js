
var Board = function(rowSize, columnSize){
	this.rowSize = rowSize;
	this.columnSize = columnSize;
	
	this.grid = new Array(rowSize);
	for(var i = 0 ; i < rowSize ; i ++){
		this.grid[i] = new Array(columnSize);
	}
};

Board.prototype.getDistanceBetweenTwoPoints = function(point1, point2){

	var distance = Math.sqrt(Math.pow(point2.getX() - point1.getX(),2)) + Math.sqrt(Math.pow(point2.getY() - point1.getY(),2));
	return distance ;
}

Board.prototype.addToken = function(token, column){
	var nextAvailablePosition = this.columnSize;
	for(var i = this.columnSize-1; i >= 0; i--){
		if(this.grid[column][i]){
			break;
		}
		nextAvailablePosition--;
	}
	console.log(token.getColor());
	this.grid[column][nextAvailablePosition] = token.getColor();
}

Board.prototype.print = function(){
	for(var i = this.rowSize-1; i >= 0; i--){
		console.log("----------------------------");
		var entireLine = i + " : |";
		for(var j = 0; j < this.columnSize; j++){
			entireLine += (this.grid[i][j] != null && this.grid[i][j] != undefined) ? this.grid[i][j] + "|": "-|";
		}
		console.log(entireLine);
	}
	var entireLine = "    ";
	for(var i = 0; i < this.columnSize; i++){
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

Board.prototype.checkWin = function(){
	return true;
}

module.exports = Board;