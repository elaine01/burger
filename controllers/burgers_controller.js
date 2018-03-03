const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		let burgerOjb = { burgers: data };
		console.log(burgerOjb);
		res.render('index', burgerOjb);
	});
});

router.post('/order', function(req, res) {
	//console.log("controller ", req.body.burger_name);
	burger.insertOne(req.body.burger_name, function() {
		res.redirect('/');
	});
});

router.put('/eat/:id', function(req, res) {
	console.log(req.body);
	console.log("devoured ", req.body.devoured);
	console.log("id ", req.params.id);

	burger.updateOne([req.body.devoured], [req.params.id], function() {
		res.redirect('/');
	});
});

router.delete('/delete/:id', function(req, res) {
	console.log(req.body);
	let condition = 'id = ' + req.params.id;

	console.log("controller ", condition);

	burger.delete(condition, function() {
		res.redirect('/');
	});
});

module.exports = router;