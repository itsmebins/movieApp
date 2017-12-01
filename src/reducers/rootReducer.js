import { combineReducers } from 'redux';
import movies from '../modules/movies/movies.reducer';
import AuthReducer from './AuthReducer.js';
import AppReducer from './AppReducer.js';
import LocaleReducer from './LocaleReducer.js';

const rootReducer = combineReducers({
	movies, auth: AuthReducer, appState: AppReducer, locale: LocaleReducer
});

export default rootReducer;
