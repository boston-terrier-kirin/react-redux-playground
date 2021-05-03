import { useState } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../redux/user-action';
import './user.css';

const User = (props) => {
	console.log('👍👍👍👍👍User');

	const [name, setName] = useState('');
	const [value, setValue] = useState(0);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleValueChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.dispatch(setUser({ name, value }));
	};

	return (
		<div className="box">
			<h1>User</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={handleNameChange} />
				<input type="text" value={value} onChange={handleValueChange} />
				<button type="submit">SET USER</button>
			</form>
		</div>
	);
};

export default connect()(User);
