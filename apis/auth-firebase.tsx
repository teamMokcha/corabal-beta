import firebase from "firebase";
import "firebase/firestore";

export async function signingUp(email: string, password: string): Promise<void> {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser?.uid).set({
      email: currentUser?.email
    });
  } catch (err) {
    console.log("Error : ", err.message);
  }
  // 성공할 경우 메인으로 이동하는 것까지 해야 함
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
