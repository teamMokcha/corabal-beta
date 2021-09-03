import { createState } from "@hookstate/core";

export const globalUserState = createState({
  userID: "",
  userIn: false,
  loggedIn: false,
  nickname: "",
  nicknameIn: false
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

// goal을 globalUserState에 넣어서 관리해야 할 것 같지만 일단 따로 만들기.
export const userGoal = createState({
  goal: 0
});
