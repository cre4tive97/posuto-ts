export interface SignUpType extends LoginType {
  nickname: string;
}

export interface LoginType {
  username: string;
  password: string;
}

export interface Position {
  width: string;
  height: string;
  x: string;
  y: string;
}

export interface PostDataType {
  title: string;
  contents: string;
  position: Position[];
  isEditing: boolean;
}
