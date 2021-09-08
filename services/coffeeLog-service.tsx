import firebase from "firebase";
import { db } from "./firebaseApp";

// 함수 안의 함수로 모듈화?

// 1. main의 플로팅 버튼으로 기록 생성 - 5잔 제한 보안 규칙에 추가되어야 함
export async function addNormalCupRecord(
  email: string,
  shot: number,
  base: string,
  option: string[],
  timestamp: Date
): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  try {
    const logDocumentationRef = db
      .collection("logs")
      .doc(email)
      .collection("date")
      .doc(`${year}-${month}-${day}`);

    const doc = await logDocumentationRef.get();
    if (doc.exists) {
      const response = await logDocumentationRef.update({
        "is_recorded.is_zero_cup": false,
        "is_recorded.is_normal_cup": false,
        "is_recorded.timestamp": "",
        normal_cup_record: firebase.firestore.FieldValue.arrayUnion({
          shot: shot,
          base: base,
          option: option
        })
      });
      return [response, null];
    } else {
      const response = await logDocumentationRef.set({
        date: { year: year, month: month, day: day },
        is_recorded: {
          is_zero_cup: false,
          is_normal_cup: false,
          timestamp: ""
        },
        normal_cup_record: [
          {
            shot: shot,
            base: base,
            option: option
          }
        ],
        watched_AD_counts: 0
      });
      return [response, null];
    }
  } catch (error) {
    return [null, error];
  }
}

// 2. '오늘 0잔 기록' 버튼으로 기록 생성(오늘의 기록 마감 - timestamp 추가)
export async function addZeroCupRecord(email: string, timestamp: Date): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  const batch = db.batch();

  try {
    const pointCollectionRef = db.collection("points").doc(email);
    batch.update(pointCollectionRef, {
      current: firebase.firestore.FieldValue.increment(20),
      "total_gain.zero_cup_records": firebase.firestore.FieldValue.increment(20)
    });

    const logDocumentationRef = db
      .collection("logs")
      .doc(email)
      .collection("date")
      .doc(`${year}-${month}-${day}`);
    const doc = await logDocumentationRef.get();
    if (doc.exists) {
      batch.update(logDocumentationRef, {
        is_recorded: {
          is_zero_cup: true,
          is_normal_cup: false,
          timestamp: timestamp
        },
        normal_cup_record: []
      });
    } else {
      batch.set(logDocumentationRef, {
        is_recorded: {
          is_zero_cup: true,
          is_normal_cup: false,
          timestamp: timestamp
        },
        normal_cup_record: []
      });
    }
    const response = await batch.commit();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

// 3. '기록 완료' 버튼으로 오늘의 기록 마감 - timestamp 추가
export async function completeTodayRecord(email: string, timestamp: Date): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  try {
    const logDocumentationRef = db
      .collection("logs")
      .doc(email)
      .collection("date")
      .doc(`${year}-${month}-${day}`);
    const doc = await logDocumentationRef.get();

    if (doc.exists) {
      const batch = db.batch();
      const pointCollectionRef = db.collection("points").doc(email);

      batch.update(pointCollectionRef, {
        current: firebase.firestore.FieldValue.increment(10),
        "total_gain.normal_cup_records": firebase.firestore.FieldValue.increment(10)
      });

      batch.update(logDocumentationRef, {
        is_recorded: {
          is_zero_cup: false,
          is_normal_cup: true,
          timestamp: timestamp
        }
      });
      const response = await batch.commit();
      return [response, null];
    } else {
      throw new Error();
    }
  } catch (error) {
    return [null, error];
  }
}

// 4. 이전 커피 기록 확인 - 24시간 지난 후 기록 true/false 확인해 자동 저장 추가 필요
// 5. 이번 달 기록 확인
// 6. 이번 달 목표 성공일 확인
// 7. 특정 달의 마감 완료된 커피 기록 확인
