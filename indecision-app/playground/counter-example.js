

let count = 0;
const addOne = () => {
	count++;
	console.log(count);
	renderCounterApp();
};
const minusOne = () => {
	count--;
	console.log(count);

	renderCounterApp();
};
const reset = () => {
	count = 0;
	console.log('reset');

	renderCounterApp();
};

const renderCounterApp = () =>{
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()