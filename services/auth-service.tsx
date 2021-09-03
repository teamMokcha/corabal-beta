import { firebaseApp, db } from "./firebaseApp";

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
        const email = credential.user?.email;
        db.collection("users")
          .doc(`${email}`)
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
    console.log(`Error: ${err}`);
    return err;
  }
}

export async function settingNickname(nickname: string): Promise<any> {
  try {
    const user = firebaseApp.auth().currentUser;
    db.collection("users")
      .doc(`${user?.email}`)
      .set({ userInfo: { nickname: nickname } }, { merge: true });
  } catch (err) {
    console.log(`Error: ${err}`);
    return err;
  }
}

export async function loggingIn(email: string, password: string): Promise<any> {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(`Error: ${err}`);
    return err;
  }
}

export async function loggingOut(): Promise<void> {
  try {
    await firebaseApp.auth().signOut();
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
