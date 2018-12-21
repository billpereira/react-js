console.log('App.js is running!');

//JSX - JavaScript XML

//create app object title/subtitle
// use title/subtitle 
//render template


var app = {
    title: 'InDecision',
    subtitle: 'In Decision App'
}

var user = {
    name : 'William',
    age : 29,
    locaion : 'Hortocity'
}


var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var templateTwo = (
	<div>
		<h1>{user.name.toUpperCase()}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.locaion}</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
