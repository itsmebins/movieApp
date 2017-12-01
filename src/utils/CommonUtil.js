//import { ROLE_ROOT_ID } from './CommonConstants.js';

export function hasRole(roleId, roles) {
  if(roles) {
    try {
      for(let i = 0; i< roles.length; i++) {
      //  if((roles[i] === roleId) || (roles[i] === ROLE_ROOT_ID)) {
          return true;
      //  };
      };

    } catch(e) {
     console.warn('role is not array');
    }
  };
  return false;
};

export function validateEmail(elementValue){
//  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
  return emailPattern.test(elementValue);
};

export function validatePhone(elementValue){
  // pattern1 ----XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX
  let pattern1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // pattern2 +XX-XXXX-XXXX   +XX.XXXX.XXXX  +XX XXXX XXXX
  let pattern2  = /^\(+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//10 to 12 digit no...
 let pattern3  = /^[0-9]{10}$/;
let pattern4  = /^[0-9]{11}$/;
let pattern5  = /^[0-9]{12}$/;
 let pattern6  = /^\+[0-9]{2}[-.\s][0-9]{10}$/;
 let pattern7  = /^\+[0-9]{2}[-.\s][0-9]{11}$/;
 let pattern8  = /^\+[0-9]{2}[-.\s][0-9]{12}$/;
  //let pattern5  = /^\(\+?([0-9]{2})\)?[-. ]?([0-9]{10, 12})$/;

  if(!elementValue) {
      return false;
  };

  if(pattern1.test(elementValue) || pattern2.test(elementValue)
|| pattern3.test(elementValue) || pattern4.test(elementValue) || pattern5.test(elementValue)
|| pattern6.test(elementValue) || pattern7.test(elementValue) ||
  pattern8.test(elementValue)) {
    return true;
  };

  return false;
};
