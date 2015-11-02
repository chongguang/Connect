
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

module.exports = Board;