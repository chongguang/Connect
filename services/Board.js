
var Board = function(rowCount, columnCount){
	this.rowCount = rowCount;
	this.columnCount = columnCount;
};

Board.prototype.getDistanceBetweenTwoPoints = function(point1, point2){
	return 1;
}

module.exports = Board;