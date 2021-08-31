import { createState } from "@hookstate/core";

export const globalUserState = createState({
  userID: "",
  loggedIn: false,
  nickname: ""
});
