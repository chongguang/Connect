
var Token = function(x, y, color){
	this.x = x;
	this.y = y;
	this.color = color;
};


Token.prototype.print = function(){
	console.log('hi');
}


Token.prototype.getX = function(){
	return this.x;
}

Token.prototype.getY = function(){
	return this.y;
}

Token.prototype.getColor = function(){
	return this.color;
}

/*
Token.prototype = {
	get x(){
		return this.x;
	},

	set x(val){
		this.x = val; 
	}
}*/

module.exports = Token;