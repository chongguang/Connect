var Token = require('../services/Token.js');

exports.testTokenConstructor = function(test){
	var t1 = new Token(1,1,1);
	console.log(t1.getX());
	//t1.setX(2);
	console.log(t1.getY());
	test.equals("1", "1", "dfgdfgfd");

	test.done();
}