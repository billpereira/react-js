import React, { useEffect } from 'react';

export default ({ note, removeNote }) => {
	useEffect(() => {
		console.log('Setting up effect!');

		return () => {
			console.log('Cleaning up effect!');
		};
	}, []);

	return (
		<div>
			<h3>{note.title}</h3>
			<p>{note.body}</p>
			<button onClick={() => removeNote(note.title)}>x</button>
		</div>
	);
};
