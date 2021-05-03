const initialState = {
	currentValue: '',
};

const anotherReducer = (state = initialState, action) => {
	console.log('💨anotherReducer', action);

	if (action.type === 'SET_ANOTHER_VALUE') {
		return {
			...state,
			currentValue: action.payload.value,
		};
	}

	return state;
};

export default anotherReducer;
