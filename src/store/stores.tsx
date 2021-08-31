import { createState } from "@hookstate/core";

export const globalUserState = createState({
  userID: "",
  userIn: false,
  loggedIn: false,
  nickname: "",
  nicknameIn: false
});
