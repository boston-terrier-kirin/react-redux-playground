import { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentName } from '../redux/user-action';
import './user.css';

const UserName = (props) => {
	console.log('👍👍👍👍👍UserName');

	const [name, setName] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.dispatch(setCurrentName({ name: name }));
	};

	return (
		<div className="box">
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={handleNameChange} />
				<button type="submit">CHANGE NAME</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(UserName);
