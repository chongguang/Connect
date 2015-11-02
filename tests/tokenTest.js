var Token = require('../services/Token.js');

exports.testTokenConstructor = function(test){
	var t1 = new Token(1,1,1);
	test.equals(t1.getX(), 1, 'X is not set correctly');
	test.equals(t1.getY(), 1, 'Y is not set correctly');
	test.equals(t1.getColor(), 1, 'Color is not set correctly');
	test.done();
}