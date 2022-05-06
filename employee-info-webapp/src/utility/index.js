const utility = {
  parseResponse,
  validateName,
  // validateEmail,
  isPasswordValid,
  shorten,
};
export default utility;

function shorten(b, amountL, amountR, stars) {
  return `${b?.slice(0, amountL)}${".".repeat(stars)}${b?.slice(
    b?.length - amountR,
    b?.length
  )}`;
}

/**
 * This function is made to handle success and error callback!
 * @param promise
 * @returns {Q.Promise<Array<any>>}
 */
function parseResponse(promise) {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => [err]);
}

function validateName(name) {
  let reg = /[A-Z][a-zA-Z]*/;
  return reg.test(name);
}

// function validateEmail(email) {
//   let reg =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return reg.test(email);
// }

function isPasswordValid(password) {
  let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return reg.test(password);
}

export const dispatchAction = (type, data) => {
  return (dispatch) => dispatch({ type, data });
};
