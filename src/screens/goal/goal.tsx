import React, { ReactElement } from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import { Text, Modal, ButtonGradient } from "@Components";
import { Input } from "react-native-elements";
import styles from "./goal.style";

const Goal = (): ReactElement => {
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
          <Text style={styles.bodyFont}>구체적으로 목표를 설정을 해보세요.</Text>
          <View style={styles.aimWrapper}>
            <Text style={styles.aim}>1일</Text>
            <TextInput style={styles.aimInput} placeholder="00" keyboardType="number-pad" />
            <Text style={styles.aim}>잔</Text>
          </View>
          <Text style={styles.caution}>* 하루 권장량 1일 1잔</Text>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGradient style={styles.complete} title="완료" />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default Goal;
