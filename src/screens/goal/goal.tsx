import React, { ReactElement, useState, useEffect } from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import { Text, Modal, ButtonGradient } from "@Components";
import styles from "./goal.style";
import { Dispatch, SetStateAction } from "react";
import { db, firebaseApp } from "@services/firebaseApp";
import { useState as HSUseState } from "@hookstate/core";
import { globalGoalState } from "@stores/stores";

type GoalProps = {
  isShowingGoal: boolean;
  setIsShowingGoal: Dispatch<SetStateAction<boolean>>;
};

const radioBtn = [0, 1, 2, 3, 4, 5];
// props 로 넘겨주기
const Goal = ({ isShowingGoal, setIsShowingGoal }: GoalProps): ReactElement => {
  const currentUserEmail = firebaseApp.auth().currentUser?.email?.toString();
  const userRef = db.collection("users").doc(currentUserEmail);
  const currentGoalState = HSUseState(globalGoalState);
  const [btn, setBtn] = useState(0);

  return (
    <Modal isVisible={isShowingGoal}>
      <Modal.Container>
        <View style={styles.header}>
          <Text style={styles.headerFont}>목표 설정</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setIsShowingGoal(false)}>
            <Image style={styles.buttonX} source={require("@assets/btn_x.png")} />
          </TouchableOpacity>
        </View>
        <Modal.Body>
          <Text style={styles.bodyFont}>구체적으로 목표를 설정해보세요.</Text>
          <View style={{ flexDirection: "row" }}>
            {radioBtn.map(btn => {
              return (
                // eslint-disable-next-line react/jsx-key
                <TouchableOpacity
                  style={{ alignItems: "center", margin: 5 }}
                  key={btn}
                  onPress={() => setBtn(btn)}
                >
                  <Image source={require("@assets/header-profile.png")} />
                  <Text>{btn}잔</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.caution}>하루 권장량 1일 1잔</Text>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGradient
            onPress={() => {
              userRef
                .set({ goal: btn }, { merge: true })
                .then(() => {
                  console.log("goal updated!");
                  currentGoalState.goal.set(btn);
                })
                .catch(error => console.error("error occurs:", error));
              setIsShowingGoal(false);
            }}
            style={styles.complete}
            title="완료"
          />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default Goal;
