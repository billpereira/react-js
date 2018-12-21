'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML

//create app object title/subtitle
// use title/subtitle 
//render template

var app = {
	title: 'InDecision',
	subtitle: 'In Decision App'
};

var user = {
	name: 'William',
	age: 29,
	locaion: 'Hortocity'
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name.toUpperCase()
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.locaion
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
