export interface SignUpType extends LoginType {
  nickname: string;
}

export interface LoginType {
  username: string;
  password: string;
}
