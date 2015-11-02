var Token = require('../services/Token.js');

exports.getPosition = function(test){
	var t1 = new Token();
	t1.print();
	test.equals("1", "1", "dfgdfgfd");

	test.done();
}