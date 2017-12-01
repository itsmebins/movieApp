import { AUTHENTICATE_USER_ACTION,
  LOGOUT_ACTION,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
LOGIN_USER_AUTHENTICATING } from '../actions/types.js';


const INITIAL_STATE = { userName: '', authenticated: false,
accessToken: '', appErrorMessage: '', authCompleted: true, isAuthenticating: false,
orgId: '', orgName: '',orgAddr: '',  sessionDuration: 0, userId: '', userFullName: '', roles: [] };

  export default (state = INITIAL_STATE, action) => {
    ////console.log(action);
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state,
         userName: action.payload.userName,
         appErrorMessage: '',
         authenticated: true,
         accessToken: action.payload.accesstoken,
         authCompleted: true,
         isAuthenticating: false,
         orgId: action.payload.orgId ? action.payload.orgId : '',
         orgName: action.payload.orgName ? action.payload.orgName : '',
         orgAddr: action.payload.orgAddr ? action.payload.orgAddr : '',
         userId: action.payload.userId ? action.payload.userId : '',
         userFullName: action.payload.userFullName ? action.payload.userFullName : '',
         sessionDuration: action.payload.sessionDuration ? action.payload.sessionDuration : 0,
         roles: action.payload.roles ? action.payload.roles : [],
        };
    case LOGIN_USER_FAIL:
      return {
        userName: action.payload.userName,
        appErrorMessage: action.payload.errorMessage,
        authenticated: false,
        accessToken: '',
        authCompleted: true,
        isAuthenticating: false
       };
     case LOGIN_USER_AUTHENTICATING:
       return {
         userName: action.payload.userName,
         appErrorMessage: "",
         authenticated: false,
         accessToken: '',
         authCompleted: false,
         isAuthenticating: true
        };
    case LOGOUT_ACTION:
      return {
        userName: '',
        appErrorMessage: action.payload.errorMessage,
        authenticated: false,
        accessToken: '',
        authCompleted: true,
        isAuthenticating: false
       };
    default:
      return state;
  }
};
