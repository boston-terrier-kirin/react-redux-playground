const initialState = {
	currentName: null,
	currentValue: 0,
};

const userReducer = (state = initialState, action) => {
	if (action.type === 'SET_CURRENT_NAME') {
		return {
			...state,
			currentName: action.payload.name,
		};
	}

	if (action.type === 'SET_CURRENT_VALUE') {
		const payload = Number.parseInt(action.payload.value);
		return {
			...state,
			currentValue: state.currentValue + payload,
		};
	}

	return state;
};

export default userReducer;
