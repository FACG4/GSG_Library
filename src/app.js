const express = require('express');
const path =  require('path');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine(
	'hbs',
	exphbs({
		extname: 'hbs',
		layoutsDir: path.join(__dirname, 'views', 'layouts'),
		partialsDir: path.join(__dirname, 'views', 'partials'),
		defaultLayout: 'main',
		helpers
	})
);


app.use(controllers);
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
