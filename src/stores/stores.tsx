import { createState } from "@hookstate/core";

export const globalUserState = createState({
  userIn: false,
  loggedIn: false,
  nicknameIn: false,
  userEmail: "",
  nickname: ""
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
