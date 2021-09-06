import { createState } from "@hookstate/core";

export const globalUserState = createState({
  userID: "",
  userIn: false,
  loggedIn: false,
  nickname: "",
  nicknameIn: false,
  userEmail: ""
});

export const globalErrorStateDuringAuth = createState({
  modalVisibility: false,
  signUpError: false,
  signUpErrorMessage: "",
  logInError: false,
  logInErrorMessage: "",
  nicknameError: false,
  nicknameErrorMessage: ""
});

export const globalGoalState = createState({
  goal: 0
});
