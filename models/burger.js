const orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	insertOne: function(burgerInput, cb) {
		orm.insertOne('burgers', burgerInput, function(res) {
			console.log("res ", res)
			cb(res);
		});
	},
	updateOne: function(devouredVal, burgerId, cb) {
		orm.updateOne('burgers', devouredVal, burgerId, function(res) {
			cb(res);
		});
	},
	delete: function(condition, cb) {
		orm.delete('burgers', condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;