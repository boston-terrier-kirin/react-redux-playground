import { connect } from 'react-redux';

const UserPage = (props) => {
	console.log('πππππUserPage');

	return (
		<div className="box">
			<p>{props.user.currentName}</p>
			<p>{props.user.currentValue}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(UserPage);
