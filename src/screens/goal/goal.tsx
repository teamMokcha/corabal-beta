import React, { ReactElement, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
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

// props 로 넘겨주기
const Goal = ({ isShowingGoal, setIsShowingGoal }: GoalProps): ReactElement => {
  const currentUserEmail = firebaseApp.auth().currentUser?.email?.toString();
  const userRef = db.collection("users").doc(currentUserEmail);
  const currentGoalState = HSUseState(globalGoalState);
  const radioButtons = [0, 1, 2, 3, 4, 5];
  const [selectedBtn, setSelectedBtn] = useState(1);

  return (
    <Modal isVisible={isShowingGoal}>
      <Modal.Container>
        <View style={styles.headerContainer}>
          <View style={styles.headerFontContainer}>
            <Text style={styles.settingGoalFont}>목표 설정</Text>
            <Text style={styles.settingGoalDescriptionFont}>일일 목표를 설정해보세요.</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setIsShowingGoal(false)}>
            <Image source={require("@assets/btn_x.png")} />
          </TouchableOpacity>
        </View>
        <Modal.Body>
          <View style={styles.bodyContainer}>
            {radioButtons.map(radioBtn => {
              return (
                <TouchableOpacity
                  key={radioBtn}
                  style={styles.radioBtnContainer}
                  activeOpacity={0.5}
                  onPress={() => setSelectedBtn(radioBtn)}
                >
                  {radioBtn === selectedBtn ? (
                    <Image source={require("@assets/radio-selected.png")} />
                  ) : (
                    <Image source={require("@assets/radio.png")} />
                  )}
                  <Text style={styles.radioBtnFont}> {radioBtn}잔</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGradient
            title="결정"
            style={styles.confirmBtn}
            onPress={() => {
              userRef
                .set({ goal: selectedBtn }, { merge: true })
                .then(() => {
                  console.log("goal updated!");
                  currentGoalState.goal.set(selectedBtn);
                })
                .catch(error => console.error(error));
              setIsShowingGoal(false);
            }}
          />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default Goal;
