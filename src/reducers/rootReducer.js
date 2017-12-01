import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer.js';
import AppReducer from './AppReducer.js';
import LocaleReducer from './LocaleReducer.js';

const rootReducer = combineReducers({
	auth: AuthReducer, appState: AppReducer, locale: LocaleReducer
});

export default rootReducer;
