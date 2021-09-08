import { db, firebaseApp } from "@services/firebaseApp";

// firebaseApp 에서 가져오는 게 아니라 전역변수로 선언된 이메일로 탐색
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

// reloading 시 No such document. -> 목표 1일 잔 나왔다가 다시 새로고침되면 1일 1잔
