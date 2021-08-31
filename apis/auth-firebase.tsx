import firebase from "firebase";
import "firebase/firestore";
import apiKeys from "@apis/keys";

export const firebaseApp = firebase.initializeApp(apiKeys.firebaseConfig);
export const db = firebase.firestore();
console.log("Firebase is initialized.");

// 1) 프로필 정보 User collenction의 nickname 필드에 merge하기
// 2) error 팝업 띄워주기
// 3) navigation 조건에 nickname 전역 변수 조건을 추가해서 currentUser와 함께 충족했을 경우에 이동하도록 수정
// >>> signUp 시 프로필로 이동하도록 수정해야 함

// 3) 비밀번호 재설정하기 (이메일로 보내는 거 실험해보기)
// 다음 번 스텝이지만... calender에서 유저 프로필 정보까지 가져올 수 있는지, store로 실험해보기
// ㄴ useremail, nickname, catStatus, goal 다 가져올 수 있는지.

export async function signingUp(
  email: string,
  password: string,
  acceptTerms: boolean
): Promise<void> {
  try {
    await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        const userID = credential.user?.uid;
        console.log("It is working");
        db.collection("users")
          .doc(userID)
          .set({
            userInfo: {
              email: email,
              acceptTerms: acceptTerms,
              nickname: ""
            },
            catStatus: 0,
            goal: 1
          });
      });
  } catch (err) {
    console.log("Error : ", err.message);
    return err;
  }
}

export async function settingNickname(nickname: string): Promise<any> {
  try {
    const user = firebaseApp.auth().currentUser;
    db.collection("users")
      .doc(user?.uid)
      .set({ userInfo: { nickname: nickname } }, { merge: true });
  } catch (err) {
    console.log("Error : ", err.message);
  }
}

export async function loggingIn(email: string, password: string): Promise<any> {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log("Error : ", err.message);
    return err;
  }
}

export async function loggingOut(): Promise<void> {
  try {
    await firebaseApp.auth().signOut();
  } catch (err) {
    console.log("Error : ", err.message);
  }
}
