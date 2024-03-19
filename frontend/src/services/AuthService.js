const moment = require("moment");

module.exports.setLocalStorage = (responseObj) => {
  const expiresAt = moment().add(
    Number.parseInt(responseObj.data.expiresIn),
    "days"
  );

  localStorage.setItem("jwt", responseObj.data.token);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

};

module.exports.logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("expires_at");
};

module.exports.isLoggedIn = () => {
  return moment().isBefore(getExpiration());
};

module.exports.isLoggedOut = () => {
  !isLoggedIn();
};

module.exports.getExpiration = () => {
  const expiration = localStorage.getItem("expires");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
};
