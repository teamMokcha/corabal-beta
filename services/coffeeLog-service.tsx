import { firebaseApp, db } from "./firebaseApp";

// 1) main의 플로팅 버튼으로 기록 생성
// > Today 값 설정 (timestamp 방식... date 객체?)
// userID는 전역에서 bring, shot, base, option> useState, click > state 변경
// >> request로 들어온 값 확인 후, 해당 userID & date의 하위에
// 기록 여부, 기록 횟수(count += 1), 커피 잔수(count += 1), 커피 타입 입력
// date는 생성

// export async function addCoffeeRecord(userID: string, shot: number, base: string, option: string) {
//   try {
//     await db.collection("users").doc(userID).collection();
//   } catch (err) {
//     console.log(err);
//   }
// }
