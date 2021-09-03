import { db } from "./firebaseApp";
import firebase from "firebase";

// 1) main의 플로팅 버튼으로 기록 생성
export async function addCoffeeRecord(
  userID: string,
  shot: number,
  base: string,
  option: string,
  timestamp: Date
): Promise<any> {
  try {
    const year = timestamp.getUTCFullYear();
    const month = timestamp.getUTCMonth();
    const day = timestamp.getUTCDate();
    const databaseRef = db
      .collection("users")
      .doc(userID)
      .collection("records")
      .doc(userID)
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
