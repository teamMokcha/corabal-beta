import { firebaseApp, db } from "./firebaseApp";
import {} from "@hookstate/core";

export async function signingUp(
  email: string,
  password: string,
  acceptTerms: boolean
): Promise<any> {
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
    return err;
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
