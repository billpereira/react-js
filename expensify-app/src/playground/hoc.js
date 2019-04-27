// Higher Order Component - A component that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract stte

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
	<div>
		<h1>Info</h1>
		<p>The info is :{props.info}</p>
	</div>
);

const withAdminWarning = WrappedComponent => {
	return props => (
		<div>
			{props.isAdmin && <p> This is private info. Please don't share</p>}
			<WrappedComponent {...props}/>
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
    return props => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ):
            (<p> Please log in</p>)
            }
        </div>
    )
}

const AdminInfo = requireAuthentication(Info);

ReactDOM.render(
	<AdminInfo info="These are the details" isAuthenticated={true}/>,
	document.getElementById('app')
);
