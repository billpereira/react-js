class VisibilityToggle extends React.Component {

    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility : false
        }
    }

    handleToggleVisibility () {
        this.setState((prevState)=>{
            return {visibility: !prevState.visibility}
            
        })
    }

    render(){

        const app = {
            title: 'Visibility Toggle',
            description: 'Here comes some description'
        };
        
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'}</button>
            {this.state.visibility  && <p>{'Here comes some description'}</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))


// const app = {
// 	title: 'Visibility Toggle',
// 	description: 'Here comes some description'
// };

// let visible=false

// const setVisible = () => {
// 	if (visible) visible = false;
// 	else visible = true;

// 	render();
// };

// const appRoot = document.getElementById('app');

// const render = ()=>{

//     const template =
//     (<div>
//     <h1>{app.title}</h1>
//     <button onClick={setVisible}>{visible ? 'Hide' : 'Show'}</button>
//     {visible && <p>{app.description}</p>}
//     </div>)

//     ReactDOM.render(template, appRoot);
// }

// render()