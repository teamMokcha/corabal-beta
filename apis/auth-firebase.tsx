import firebase from "firebase";
import "firebase/firestore";
import apiKeys from "@apis/keys";

const firebaseApp = firebase.initializeApp(apiKeys.firebaseConfig);
const db = firebase.firestore();
console.log("Firebase is initialized.");

// 성공할 경우 메인으로 이동하는 것까지 해야 함

export async function signingUp(
  email: string,
  password: string,
  acceptTerms: boolean
): Promise<any> {
  return firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(
      credential => {
        const userID = credential.user?.uid;
        db.collection("users")
          .doc(userID)
          .set({
            userInfo: {
              email: email,
              acceptTerms: acceptTerms,
              nickName: ""
            },
            catStatus: 0,
            goal: 1
          });
      },
      error => console.error(error)
    );
}

export async function loggingIn(email: string, password: string): Promise<void> {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log("Error : ", err.message);
  }
}

export async function loggingOut(): Promise<void> {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log("Error : ", err.message);
  }
}
