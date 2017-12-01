function getServerName() {
//need to take it dynamically....
  const localServerNmae = 'http://127.0.0.1:8080';
  const qaServerName = '';
  const productionServerIP = '';
  const productionServerName = '';
//  return localServerNmae;
return productionServerName;
};
export const SERVER_NAME = getServerName();


export const CASE_LIST_RANGE_VALUE = 30;
//SETTING 30 MINUTE TIME OUT..
export const COMMON_TIMEOUT_VALUE = 30 * 60 * 1000;
//this will be used to display the maximum records in one data fetch API
export const COMMON_PAGE_RECORDS = 100;
