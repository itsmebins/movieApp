const INITIAL_STATE = { localeValue: 'en'};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
  case 'CHANGE_LOCALE_VALUE':
    return { ...state,
       localeValue: action.payload
      };
  default:
    return state;
}
};
