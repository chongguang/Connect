
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

Token.prototype.setX = function(val){
	this.x = val;
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