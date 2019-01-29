import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class InDecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};
	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};
	handleDeleteOptionSingular = optionToRemove => {
		this.setState(prevState => ({
			options: prevState.options.filter(option => optionToRemove !== option)
		}));
	};
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: option
		}));
	};
	handleAddOption = option => {
		if (!option)
			return 'Please enter a valid value item';
		else if (this.state.options.indexOf(option) > -1)
			return 'Item already added';

		this.setState(prevState => ({
			options: prevState.options.concat([option])
		}));
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) this.setState(() => ({ options }));
		} catch (e) {}
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
				<div className="container">
					<Action
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOptionSingular}
						/>
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
				</div>

				<OptionModal
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
			</div>
		);
	}
}
