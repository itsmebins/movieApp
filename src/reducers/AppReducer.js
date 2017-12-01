import {
  LOGIN_USER_SUCCESS,
  APP_INITIALIZED,
  LOGOUT_ACTION,
STORE_LOADED,
APP_INITIALIZING, CHANGE_LOCALE_VALUE } from '../actions/types.js';

const INITIAL_STATE = { mainAppLoaded:false,  rootId:'login', localeValue: 'en' };

  export default (state = INITIAL_STATE, action) => {
    ////console.log(action);
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state,
         mainAppLoaded: true,
         rootId:'afterLogin'
       };
   case STORE_LOADED:
     return { ...state,
        mainAppLoaded: true,
        rootId:'afterLogin'
       };
   case CHANGE_LOCALE_VALUE:
     return { ...state,
        localeValue: action.payload
       };
    case LOGOUT_ACTION:
    return { ...state,
       rootId: 'login',
       mainAppLoaded: false,
      };
    default:
      return state;
  }
};
