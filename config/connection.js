const mysql = require('mysql');

const connection = function() {
	const con = mysql.createConnection({
		host: "localhost",
		user: "root",
		database: "burgers_db"
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
	});	
};


module.exports = connection;