
var Token = function(x, y, color){
	this.x = x;
	this.y = y;
	this.color = color;

};

Token.prototype.print = function(){
	console.log('hi');
}

module.exports = Token;