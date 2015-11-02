
var Board = function(rowSize, columnSize){
	this.rowSize = rowSize;
	this.columnSize = columnSize;
	
	this.grid = new Array(rowSize);
	for(var i = 0 ; i < rowSize ; i ++){
		this.grid.push(new Array(columnSize));
	}
};

Board.prototype.getDistanceBetweenTwoPoints = function(point1, point2){
	return 0;
}

Board.prototype.getRowSize = function(){
	return this.rowSize;
}

Board.prototype.getColumnSize = function(){
	return this.ColumnSize;
}

Board.prototype.getGrid = function(){
	return this.grid;
}

module.exports = Board;