const app = {
	title: 'Visibility Toggle',
	description: 'Here comes some description'
};

let visible=false

const setVisible = () => {
	if (visible) visible = false;
	else visible = true;

	render();
};

const appRoot = document.getElementById('app');

const render = ()=>{

    const template =
    (<div>
    <h1>{app.title}</h1>
    <button onClick={setVisible}>{visible ? 'Hide' : 'Show'}</button>
    {visible && <p>{app.description}</p>}
    </div>)

    ReactDOM.render(template, appRoot);
}

render()