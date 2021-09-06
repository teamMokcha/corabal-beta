import { db } from "./firebaseApp";

export async function createUserCollection(
  email: string,
  acceptTerms: boolean,
  timestamp: Date
): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth();
  const day = timestamp.getDate();

  try {
    const batch = db.batch();

    const userCollectionRef = db.collection("users").doc(email);
    batch.set(userCollectionRef, {
      userInfo: {
        email: email,
        acceptTerms: acceptTerms,
        nickname: ""
      },
      catStatus: 0,
      goal: 1
    });

    const myCupCollectionRef = userCollectionRef.collection("myCups").doc(email);
    batch.set(myCupCollectionRef, { totalOwned: 1, currentWearingCupID: 1, purchasedCups: [] });

    const myPointsCollectionRef = userCollectionRef.collection("myPoints").doc(email);
    batch.set(myPointsCollectionRef, { current: 10, totalGain: 0, totalUsed: 0 });

    const myRecordsMonthCollectionRef = userCollectionRef
      .collection("myRecords")
      .doc(email)
      .collection("years")
      .doc(`${year}`)
      .collection("month")
      .doc(`${month}`);
    batch.set(
      myRecordsMonthCollectionRef,
      {
        recordedDays: 0,
        goalAchievingDays: 0,
        totalNormalCups: 0
      },
      { merge: true }
    );

    const myRecordsDayCollectionRef = myRecordsMonthCollectionRef.collection("days").doc(`${day}`);
    batch.set(
      myRecordsDayCollectionRef,
      {
        isRecorded: { recordFinish: true, timestamp: timestamp },
        isGoalAchieved: false,
        watchedADsCounts: 0,
        recordCounts: 0,
        zeroCupRecord: false,
        normalCupRecords: [{ shot: 0, base: "none", option: "none" }],
        gottenPoints: {
          totalWatchedAD: 0,
          zeroCupRecord: 0,
          normalCupRecord: 0
        },
        usedPoints: {
          callingCats: 0,
          buyingCups: 0
        }
      },
      { merge: true }
    );

    const response = await batch.commit();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}
