import { db } from "./firebaseApp";

export async function createUserCollection(
  email: string,
  acceptTerms: boolean,
  timestamp: Date
): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  try {
    const batch = db.batch();

    const userCollectionRef = db.collection("users").doc(email);
    batch.set(userCollectionRef, {
      active: true,
      email: email,
      nickname: "",
      accept_terms: acceptTerms,
      cat_status: 0,
      goal: 1,
      cup_current_wearing: 0,
      cup_owned: [0],
      cup_can_buy: [
        { 1: false },
        { 2: false },
        { 3: false },
        { 4: false },
        { 5: false },
        { 6: false },
        { 7: false },
        { 8: false },
        { 9: false }
      ]
    });

    const pointCollectionRef = db.collection("points").doc(email);
    batch.set(pointCollectionRef, {
      current: 10,
      total_gain: { bonus: 10, watched_ADs: 0, normal_cup_records: 0, zero_cup_records: 0 },
      total_used: { calling_cat: 0, buying_cup: 0 }
    });

    const logCollectionRef = db
      .collection("logs")
      .doc(email)
      .collection("date")
      .doc(`${year}-${month}-${day}`);
    batch.set(logCollectionRef, {
      date: { year: year, month: month, day: day },
      is_recorded: {
        is_zero_cup: false,
        is_normal_cup: false,
        timestamp: ""
      },
      normal_cup_record: [],
      watched_AD_counts: 0
    });

    const response = await batch.commit();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}
