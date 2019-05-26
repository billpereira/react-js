// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
class InDecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(
			this
		);
		this.state = {
			options: props.options
		};
	}
	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}
	handleDeleteOptionSingular(optionToRemove) {
		this.setState(prevState => ({
			options: prevState.options.filter(option => optionToRemove !== option)
		}));
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

		this.setState(prevState => ({
			options: prevState.options.concat([option])
		}));
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) this.setState(() => ({ options }));
		} catch (e){}
	}

	componentWillUnmount() {
		console.log('component unmounted');
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer!!';

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOptionSingular}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

InDecisionApp.defaultProps = {
	options: []
};

const Header = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'InDecision App'
};

const Action = props => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				What should i do?
			</button>
		</div>
	);
};

const Options = props => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started</p>}
			{props.options.map(option => (
				<Option
					key={option}
					option={option}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

const Option = props => {
	return (
		<div>
			{props.option}
			<button
				onClick={e => {
					props.handleDeleteOption(props.option);
				}}
			>
				remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {
		e.preventDefault();
		let option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		if (!error) e.target.elements.option.value = '';
		this.setState(() => ({ error }));
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
