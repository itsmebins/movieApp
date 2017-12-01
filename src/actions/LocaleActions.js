import { CHANGE_LOCALE_VALUE}  from './types.js';

export function changeLocaleValue(localeValue = 'en') {
  //console.log(localeValue);
  return {
    type:CHANGE_LOCALE_VALUE,
    payload: localeValue
  }
}
