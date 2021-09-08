import { firebaseApp, db } from "./firebaseApp";

// 1. DB 모델 생성 > Auth 로직 재확인
// (기왕이면 password 왜 특수문자 2개 입력해야 하는지도 고치자)
// 2) Coffee Log 생성 (update로)

// 1) promise로 유저 객체 생성 > 에러 분리 v
// 2) DB에서 모델 만들기 > 에러 분리

export async function createCredential(email: string, password: string): Promise<any> {
  try {
    const credential = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    return [credential, null];
  } catch (error) {
    return [null, error];
  }
}

export async function setNickname(email: string, nickname: string): Promise<any> {
  try {
    const userCollectionRef = db.collection("users").doc(email);
    const response = await userCollectionRef.update({ nickname: nickname });
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

export async function logInWithFirebase(email: string, password: string): Promise<any> {
  try {
    const loggedInUser = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    return [loggedInUser, null];
  } catch (error) {
    return [null, error];
  }
}

export async function logOutWithFirebase(): Promise<void> {
  try {
    await firebaseApp.auth().signOut();
  } catch (error) {
    console.log(error);
  }
}

export async function sendPasswordRestEmail(email: string): Promise<void> {
  try {
    await firebaseApp.auth().sendPasswordResetEmail(email);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAccountOnFirebase(): Promise<void> {
  try {
    const user = firebaseApp.auth().currentUser;
    await user?.delete();
  } catch (error) {
    console.log(error);
  }
}
