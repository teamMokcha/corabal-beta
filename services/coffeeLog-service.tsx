import { db } from "./firebaseApp";
import firebase from "firebase";

// 1. main의 플로팅 버튼으로 기록 생성
export async function addNormalCupRecord(
  email: string,
  shot: number,
  base: string,
  option: string[],
  timestamp: Date
): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth();
  const day = timestamp.getDate();

  try {
    const batch = db.batch();

    const myRecordsMonthDatabaseRef = db
      .collection("users")
      .doc(email)
      .collection("records")
      .doc(email)
      .collection("years")
      .doc(`${year}`)
      .collection("month")
      .doc(`${month}`);

    // 데이터 존재할 경우를 년도별, 월별, 일별로 나눠서 생각해야 함!
    // batch.update(myRecordsMonthDatabaseRef, {
    //   totalNormalCups: firebase.firestore.FieldValue.increment(1)
    // });

    // const myRecordsDayCollectionRef = myRecordsMonthDatabaseRef.collection("days").doc(`${day}`);
    // batch.update(myRecordsDayCollectionRef, {
    //   "isRecorded.totalRecordCounts": firebase.firestore.FieldValue.increment(1),
    //   zeroCupRecord: false,
    //   normalCupRecord: true,
    //   normalCupRecordCounts: firebase.firestore.FieldValue.increment(1)
    // });

    // const myRecordsDailyNormalCupsCollectionRef = myRecordsDayCollectionRef
    //   .collection("normalCupRecords")
    //   .doc();

    // batch.set(
    //   myRecordsDailyNormalCupsCollectionRef,
    //   { shot: shot, base: base, option: option, timestamp: timestamp },
    //   { merge: true }
    // );

    const response = await batch.commit();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

// 2. '오늘 0잔 기록' 버튼으로 기록 생성(오늘의 기록 마감 - timestamp 추가)
export async function addZeroCupRecord(userEmail: string, timestamp: Date): Promise<any> {
  try {
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth();
    const day = timestamp.getDate();
    const UserDatabaseRef = db.collection("users").doc(`${userEmail}`);
    const MonthDatabaseRef = UserDatabaseRef.collection("records")
      .doc(`${userEmail}`)
      .collection("years")
      .doc(`${year}`)
      .collection("month")
      .doc(`${month}`);

    await UserDatabaseRef.collection("points")
      .doc()
      .set(
        {
          current: firebase.firestore.FieldValue.increment(20),
          totalGotten: firebase.firestore.FieldValue.increment(20)
        },
        { merge: true }
      );

    await MonthDatabaseRef.set(
      {
        recordedDays: firebase.firestore.FieldValue.increment(1),
        goalAchievingDays: firebase.firestore.FieldValue.increment(1)
      },
      { merge: true }
    );

    await MonthDatabaseRef.collection("days")
      .doc(`${day}`)
      .set(
        {
          zeroCupRecord: true,
          isGoalAchieved: true,
          isRecorded: { recordFinish: true, timestamp: timestamp },
          recordCounts: 1,
          gottenPoints: {
            totalWatchedAD: firebase.firestore.FieldValue.increment(0),
            zeroCupRecord: 20,
            normalCupRecord: 0
          }
        },
        { merge: true }
      );

    console.log("Recording succeed.");
  } catch (err) {
    console.log(err);
  }
}

// 3. '기록 완료' 버튼으로 오늘의 기록 마감 - timestamp 추가
export async function completeTodayRecord(userEmail: string, timestamp: Date): Promise<any> {
  try {
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth();
    const day = timestamp.getDate();
    const UserDatabaseRef = db.collection("users").doc(`${userEmail}`);
    const MonthDatabaseRef = UserDatabaseRef.collection("records")
      .doc(`${userEmail}`)
      .collection("years")
      .doc(`${year}`)
      .collection("month")
      .doc(`${month}`);

    let isGoalAchieved = false;
    let gottenPoints = 0;
    let goalAchievingDay = 0;

    let goal = undefined;
    const dbRef = firebase.database().ref();
    dbRef
      .child("users")
      .child(`${userEmail}`)
      .child("goal")
      .get()
      .then(snapshot => {
        if (snapshot.exists()) {
          goal = snapshot.val();
        } else {
          console.log("No data available");
        }
      });

    if (year === month) {
      isGoalAchieved = true;
      gottenPoints = 10;
      goalAchievingDay = 1;
    } else {
      isGoalAchieved = false;
      gottenPoints = 0;
      goalAchievingDay = 0;
    }

    await UserDatabaseRef.collection("points")
      .doc()
      .set(
        {
          current: firebase.firestore.FieldValue.increment(10),
          totalGotten: firebase.firestore.FieldValue.increment(10)
        },
        { merge: true }
      );

    await MonthDatabaseRef.set(
      {
        recordedDays: firebase.firestore.FieldValue.increment(1),
        goalAchievingDays: firebase.firestore.FieldValue.increment(goalAchievingDay)
      },
      { merge: true }
    );

    await MonthDatabaseRef.collection("days")
      .doc(`${day}`)
      .set(
        {
          zeroCupRecord: false,
          isGoalAchieved: isGoalAchieved,
          isRecorded: { recordFinish: true, timestamp: timestamp },
          gottenPoints: {
            totalWatchedAD: firebase.firestore.FieldValue.increment(0),
            zeroCupRecord: 0,
            normalCupRecord: gottenPoints
          }
        },
        { merge: true }
      );
  } catch (err) {
    console.log(err);
  }
}

// 4. 기록 보여주기 시 > recordID를 이메일로 가져오기
//  > 가져온 레코드마다 고유 ID가 존재할 것 > 삭제 가능하도록
