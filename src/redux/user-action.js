export const setCurrentName = (user) => ({
	type: 'SET_CURRENT_NAME',
	payload: {
		name: user.name,
	},
});

export const setCurrentValue = (user) => ({
	type: 'SET_CURRENT_VALUE',
	payload: {
		name: user.name,
		value: user.value,
	},
});
