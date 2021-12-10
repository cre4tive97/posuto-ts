import { getAuthFromCookie, getUserFromCookie } from "@/utils/cookies.js";

export const state = {
  token: getAuthFromCookie() || "",
  nickname: getUserFromCookie() || "",
  postColor: "#FEC0CA",
  postEmptyStatus: false,
};

export type RootState = typeof state;
