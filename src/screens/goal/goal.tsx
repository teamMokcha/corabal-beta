import React, { ReactElement, useState } from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import { Text, Modal, ButtonGradient } from "@Components";
import styles from "./goal.style";
import { Dispatch, SetStateAction } from "react";
import RNPickerSelect from "react-native-picker-select";
import { userGoal } from "@stores/stores";
import { useState as HSUseState } from "@hookstate/core";

type GoalProps = {
  isShowingGoal: boolean;
  setIsShowingGoal: Dispatch<SetStateAction<boolean>>;
};

const pickerStyle = {
  inputAndroid: {
    color: "black",
    marginLeft: 26,
    fontSize: 25
  }
};

const radioBtn = [0, 1, 2, 3, 4, 5];

// props 로 넘겨주기
const Goal = ({ isShowingGoal, setIsShowingGoal }: GoalProps): ReactElement => {
  const [selectedGoal, setSelectedGoal] = useState(0);
  const goal = HSUseState(userGoal);

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
          {/* 모달 바꾸기 */}
          <Text style={styles.caution}>* 하루 권장량 1일 1잔</Text>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGradient
            onPress={() => {
              setIsShowingGoal(false);
              // goal.set(selectedGoal);
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
