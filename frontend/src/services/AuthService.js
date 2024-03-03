const moment = require("moment");

module.exports.setLocalStorage = (responseObj) => {
  const expires = moment().add(responseObj.data.expiresIn);

  localStorage.setItem("token", responseObj.data.token);
  localStorage.setItem("expires", JSON.stringify(expires.valueOf()));
};

module.exports.logout = () => {
  localStorage.removeItem("token");
  localStorage.setItem("expires");
};

module.exports.isLoggedIn = () => {
  return moment().isBefore(getExpiration());
};

module.exports.isLoggedOut= () => {
  !isLoggedIn();
}

module.exports.getExpiration = () => {
  const expiration = localStorage.getItem("expires");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
};
