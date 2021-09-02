import React, { ReactElement, useState } from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import { Text, Modal, ButtonGradient } from "@Components";
import styles from "./goal.style";
import { Dispatch, SetStateAction } from "react";
import RNPickerSelect from "react-native-picker-select";

type GoalProps = {
  isShowingGoal: boolean;
  setIsShowingGoal: Dispatch<SetStateAction<boolean>>;
};

const pickerStyle = {
  inputAndroid: {
    color: "black",
    marginLeft: 26,
    fontSize: 15
  }
};

// props 로 넘겨주기
const Goal = ({ isShowingGoal, setIsShowingGoal }: GoalProps): ReactElement => {
  const [selectedGoal, setSelectedGoal] = useState(0);

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
          <View style={styles.aimWrapper}>
            <Text style={styles.aim}>1일</Text>
            <View style={{ width: 100 }}>
              <RNPickerSelect
                placeholder={{}}
                fixAndroidTouchableBug={true}
                useNativeAndroidPickerStyle={true}
                onValueChange={value => setSelectedGoal(value)}
                value={selectedGoal}
                items={[
                  { label: "0", value: 0 },
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                  { label: "4", value: 4 },
                  { label: "5", value: 5 }
                ]}
                style={pickerStyle}
              />
            </View>
            <Text style={styles.aim}>잔</Text>
          </View>
          <Text style={styles.caution}>* 하루 권장량 1일 1잔</Text>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGradient
            onPress={() => {
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
