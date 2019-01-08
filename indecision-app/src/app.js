// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
class InDecisionApp extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Action />
				<Options />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>InDecision App</h1>
				<h2>Put your life in the hands of a computer</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should i do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<ol>
					<Option />
				</ol>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<li>Options component here</li>
		)
	}
}
// {app.options.map(option => (
// 	<li key={option}>{option}</li>
// ))}

class AddOption extends React.Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}
// onSubmit={onFormSubmit}

ReactDOM.render(<InDecisionApp />, document.getElementById('app'));
