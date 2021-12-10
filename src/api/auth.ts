import { instance } from "@/api/index";
import { LoginType, SignUpType } from "@/types/types";

// 회원가입
function registerUser(userData: SignUpType) {
  return instance.post("signup", userData);
}

// 로그인
function loginUser(userData: LoginType) {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
