import { AUTHENTICATE_USER_ACTION,
  LOGOUT_ACTION, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
LOGIN_USER_AUTHENTICATING,
REGISTER_USER  } from './types.js';
import { authenticateUser, registerUser } from '../utils/APIUtils.js';

export function authenticateUser1(localeValue = 'en-US') {
  return {
    type:'CHANGE_LOCALE_VALUE',
    payload: localeValue
  };
};
// lOGIN PROCESS
export const authenticateUserAPI = (userCredentials, navigator) => {
console.log('here');
  return (dispatch) => {
    const requestData = {
      "username": userCredentials.userId,
      "password": userCredentials.password
    };
    userAthenticationInProgress(dispatch,
       { userName: userCredentials.userId,
         errorMessage:''
       });
    authenticateUser(requestData)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        if(response.data.token && response.data.token !== '') {
          const successData = {
            userName: userCredentials.userId,
            accesstoken: response.data.token,
            authCompleted: true,
            orgId: '',
            orgName: '',
            orgAddr: '',
            sessionDuration: '',
            userId:  userCredentials.userId,
            userFullName:   userCredentials.userId
          };
          loginUserSuccess(dispatch, successData);
        } else {
          let errorMsg = "Login failed..."
          if(response.data && response.data.non_field_errors) {
            errorMsg = response.data.non_field_errors;
          }
          loginUserFail(dispatch,
            { userName:  userCredentials.userId,
              errorMessage: errorMsg,
              authCompleted: true });
        };
      } else {
        let errorMsg = "Login failed..."
        if(response.data && response.data.non_field_errors) {
          errorMsg = response.data.non_field_errors;
        }
        loginUserFail(dispatch,
          { userName: userCredentials.userId,
            errorMessage: errorMsg,
            authCompleted: true });
      };
    })
    .catch((error) => {
      console.warn(error);
      loginUserFail(dispatch,
         { userName: userCredentials.userId,
           errorMessage: " Connection error, please try again ",
         authCompleted: true});
    });
  };
};

const loginUserFail = (dispatch, data) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: data
  });
};

const userAthenticationInProgress = (dispatch, data) => {
  dispatch({
    type: LOGIN_USER_AUTHENTICATING,
    payload: data
  });
};

const loginUserSuccess = (dispatch, data) => {
  dispatch({
  type: LOGIN_USER_SUCCESS,
  payload: data
  });

//  Actions.dashboard({ type: ActionConst.REPLACE });
};

export const logoutAction = (errorMessage) => {
  return (dispatch,  getState) => {
    dispatch({
      type: LOGOUT_ACTION,
      payload: {errorMessage: errorMessage}
    });
  };
};
