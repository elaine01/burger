const connection = require('./connection.js');

const orm = {
	selectAll: function(table, cb) {
		let queryString = "SELECT * FROM " + table + ";";

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		})
	},
	insertOne: function(table, burgerInput, cb) {
		let queryString = "INSERT INTO " + table + " SET ?";

		console.log(queryString);

		connection.query(queryString, [{ burger_name: burgerInput, devoured: false }],
			function(err, result) {
				if (err) throw err;
				cb(result);
		})
	},
	updateOne: function(table, devoured, burgerId, cb) {
		let queryString = "UPDATE " + table + " SET ? WHERE ?";

		connection.query(queryString, [ {devoured: true }, { id: burgerId }],
			function(err, result) {
				if (err) throw err;
				cb(result);
		})
	},
	delete: function(table, burgerId, cb) {
		let queryString = "DELETE FROM " + table + " WHERE id = ?";

		console.log('queryString ', queryString);
		console.log("orm ", burgerId);

		connection.query(queryString, [burgerId],
			function(err, result) {
				if (err) throw err;
				cb(result);
		})
	}
};

module.exports = orm;