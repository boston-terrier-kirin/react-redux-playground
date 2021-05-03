import { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentValue } from '../redux/another-action';
import './user.css';

const AnotherValue = (props) => {
	console.log('👍👍👍👍👍AnotherValue');

	const [value, setValue] = useState(0);

	const handleValueChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.dispatch(setCurrentValue(value));
	};

	return (
		<div className="box">
			<h1>Another</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={value} onChange={handleValueChange} />
				<button type="submit">SET VALUE</button>
			</form>
		</div>
	);
};

export default connect()(AnotherValue);
