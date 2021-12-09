import VueCookies from "vue-cookies";

VueCookies.VueCookies.get;

function saveAuthToCookie(value: string): void {
  VueCookies.VueCookies.set("posuto_auth", value);
}

function saveUserToCookie(value: string): void {
  VueCookies.VueCookies.set("posuto_user", value);
}

function getAuthFromCookie(): string {
  return VueCookies.VueCookies.get("posuto_auth");
}

function getUserFromCookie(): string {
  return VueCookies.VueCookies.get("posuto_user");
}

function deleteCookie(value: string): void {
  VueCookies.VueCookies.remove(value);
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};
