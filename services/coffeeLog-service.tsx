import { firebaseApp, db } from "./firebaseApp";
import firebase from "firebase";
// import firestore from "firebase/firestore";
// userId & recordsId 모두 전역에서 관리해야 함

// 1) main의 플로팅 버튼으로 기록 생성
// shot, base, option> useState, click > state 변경
// >> request로 들어온 값 확인 후, 해당 userID & date의 하위에
// 기록 여부, 기록 횟수(count += 1), 커피 잔수(count += 1), 커피 타입 입력
// date는 생성

const timestamp = new Date();
const year = timestamp.getUTCFullYear();
const month = timestamp.getUTCMonth();
const day = timestamp.getUTCDate();

export async function addCoffeeRecord(
  // userID: string,
  shot: number,
  base: string,
  option: string
): Promise<any> {
  try {
    const userID = firebaseApp.auth().currentUser?.uid;

    await db
      .collection("users")
      .doc(userID)
      .collection("records")
      .doc(userID)
      .collection("years")
      .doc(`${year}`)
      .collection("month")
      .doc(`${month}`)
      .collection("days")
      .doc(`${day}`)
      .collection("normalCupRecords")
      .doc()
      .set({ shot: shot, base: base, option: option, timestamp: timestamp }, { merge: true });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function addCoffeeRecordCounts(): Promise<any> {
  try {
    const userID = firebaseApp.auth().currentUser?.uid;

    await db
      .collection("users")
      .doc(userID)
      .collection("records")
      .doc(userID)
      .collection("years")
      .doc(`${year}`)
      .collection("month")
      .doc(`${month}`)
      .collection("days")
      .doc(`${day}`)
      .update({ recordCounts: firebase.firestore.FieldValue.increment(1) });
  } catch (error) {
    console.log(error);
    return error;
  }
}
