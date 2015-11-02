
var Token = function(color){
	this.color = color;
};

/*
Token.prototype.getX = function(){
	return this.x;
}

Token.prototype.getY = function(){
	return this.y;
}
*/

Token.prototype.getColor = function(){
	return this.color;
}


module.exports = Token;