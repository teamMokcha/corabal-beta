import { firebaseApp, db } from "./firebaseApp";
import firebase from "firebase";

// 1) main의 플로팅 버튼으로 기록 생성
export async function addCoffeeRecord(
  shot: number,
  base: string,
  option: string[],
  timestamp: Date
): Promise<any> {
  try {
    const userEmail = firebaseApp.auth().currentUser?.email;
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth();
    const day = timestamp.getDate();
    const databaseRef = db
      .collection("users")
      .doc(`${userEmail}`)
      .collection("records")
      .doc(`${userEmail}`)
      .collection("years")
      .doc(`${year}`)
      .collection("month")
      .doc(`${month}`)
      .collection("days")
      .doc(`${day}`);

    await databaseRef.set(
      { zeroCupRecord: false, recordCounts: firebase.firestore.FieldValue.increment(1) },
      { merge: true }
    );

    await databaseRef
      .collection("normalCupRecords")
      .doc()
      .set({ shot: shot, base: base, option: option, timestamp: timestamp }, { merge: true });

    console.log("Recording succeeded");
  } catch (err) {
    console.log(err);
    return err;
  }
}
