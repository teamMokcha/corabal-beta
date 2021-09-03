import React, { ReactElement, useState } from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import { Text, Modal, ButtonGradient } from "@Components";
import { Input } from "react-native-elements";
import styles from "./goal.style";

const radioBtn = [0, 1, 2, 3, 4, 5];

// props 로 넘겨주기
const Goal = (): ReactElement => {
  const [isShowingGoal, setIsShowingGoal] = useState(true);
  const [selectedGoal, setSelectedGoal] = useState(0);

  return (
    <Modal isVisible={false}>
      <Modal.Container>
        <View style={styles.header}>
          <Text style={styles.headerFont}>목표 설정</Text>
          <TouchableOpacity activeOpacity={0.5}>
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
                  onPress={() => setSelectedGoal(btn)}
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
              setIsShowingGoal(false);
              console.log(selectedGoal);
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
