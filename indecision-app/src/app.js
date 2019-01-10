// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
class InDecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: []
		};
	}

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		console.log(option);
	}

	handleAddOption(option) {
		if (!option) return 'Please enter a valid value item';
		else if (this.state.options.indexOf(option) > -1)
			return 'Item already added';

		this.setState(prevState => {
			return {
				options: prevState.options.concat([option])
			};
		});
	}

	render() {
		const title = 'InDecision App';
		const subtitle = 'Put your life in the hands of a computer!!';

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions}
				>
					What should i do?
				</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				<ol>
					{this.props.options.map(option => (
						<Option key={option} option={option} />
					))}
				</ol>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <li>{this.props.option}</li>;
	}
}
// {app.options.map(option => (
// 	<li key={option}>{option}</li>
// ))}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}
	handleAddOption(e) {
		e.preventDefault();
		let option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		console.log(error);
		if (!error) e.target.elements.option.value = '';
		this.setState(()=>{
			return{error}
		})
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}
// onSubmit={onFormSubmit}

ReactDOM.render(<InDecisionApp />, document.getElementById('app'));
