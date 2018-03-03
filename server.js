const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const parser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const PORT = 8080;

const routes = require('./controllers/burgers_controller.js');
app.use(routes);

app.listen(process.env.PORT || PORT, function() {
	console.log("App now listening at localhost: " + PORT);
});
