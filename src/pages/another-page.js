import { connect } from 'react-redux';

const AnotherPage = (props) => {
	console.log('🐶🐶🐶🐶🐶AnotherPage', props);

	return (
		<div className="box">
			<p>{props.another.currentValue}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		another: state.another,
	};
};

export default connect(mapStateToProps)(AnotherPage);
