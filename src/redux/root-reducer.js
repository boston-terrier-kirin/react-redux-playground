import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import anotherReducer from './another-reducer';

export default combineReducers({
	user: userReducer,
	another: anotherReducer,
});
