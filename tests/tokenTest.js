var Token = require('../services/Token.js');

exports.testTokenConstructor = function(test){
	var t1 = new Token(1);
	test.equals(t1.getColor(), 1, 'Color is not set correctly');
	test.done();
}