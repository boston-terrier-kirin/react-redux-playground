export const setUser = (user) => ({
	type: 'SET_USER',
	payload: {
		name: user.name,
		value: user.value,
	},
});
