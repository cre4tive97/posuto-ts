import VueCookies from "vue-cookies";

function saveAuthToCookie(value) {
  VueCookies.set("posuto_auth", value);
}

function saveUserToCookie(value) {
  VueCookies.set("posuto_user", value);
}

function getAuthFromCookie() {
  return VueCookies.get("posuto_auth");
}

function getUserFromCookie() {
  return VueCookies.get("posuto_user");
}

function deleteCookie(value) {
  VueCookies.remove(value);
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};
