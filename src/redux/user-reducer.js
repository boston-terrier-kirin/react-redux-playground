const initialState = {
	currentName: null,
	currentValue: 0,
};

const userReducer = (state = initialState, action) => {
	console.log('💨userReducer', action);

	if (action.type === 'SET_USER') {
		return {
			...state,
			currentName: action.payload.name,
			currentValue: action.payload.value,
		};
	}

	return state;
};

export default userReducer;
