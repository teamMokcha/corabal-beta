import { db, firebaseApp } from "@services/firebaseApp";

const currentUserRef = firebaseApp.auth().currentUser?.email?.toString();
const userRef = db.collection("users").doc(currentUserRef);

export const getGoal = (): Promise<number> => {
  return userRef
    .get()
    .then(doc => {
      if (doc.exists) return doc.get("goal");
      else console.log("No such document.");
    })
    .catch(error => console.error(error));
};
