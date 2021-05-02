import { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentValue } from '../redux/user-action';
import './user.css';

const UserValue = (props) => {
	console.log('👍👍👍👍👍UserValue');

	const [value, setValue] = useState(0);

	const handleValueChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.dispatch(setCurrentValue({ value: value }));
	};

	return (
		<div className="box">
			<form onSubmit={handleSubmit}>
				<input type="text" value={value} onChange={handleValueChange} />
				<button type="submit">SET VALUE</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(UserValue);
