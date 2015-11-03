var Token = require('../services/Token.js');

exports.testTokenConstructor = function(test){
	var t1 = new Token('*');
	test.equals(t1.getColor(), '*', 'Color is not set correctly');
	test.done();
}