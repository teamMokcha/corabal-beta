import React, { ReactElement } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonNormal, Modal, Text } from "@Components";
import { useState as HSUseState } from "@hookstate/core";
import { globalErrorStateDuringAuth } from "@stores/stores";
import { styles } from "./error-modal.styles";
// Need to separate error message

export default function ErrorModal(): ReactElement {
  const errorStateDuringAuth = HSUseState(globalErrorStateDuringAuth);
  const modalVisibility = errorStateDuringAuth.modalVisibility.get();
  const signUpError = errorStateDuringAuth.signUpError.get();
  const signUpErrorMessage = errorStateDuringAuth.signUpErrorMessage.get();
  const logInError = errorStateDuringAuth.logInError.get();
  const logInErrorMessage = errorStateDuringAuth.logInErrorMessage.get();
  const nicknameError = errorStateDuringAuth.nicknameError.get();
  const nicknameErrorMessage = errorStateDuringAuth.nicknameErrorMessage.get();

  return (
    <Modal isVisible={modalVisibility}>
      <View style={styles.modalContainer}>
        <Modal.Container>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                errorStateDuringAuth.modalVisibility.set(false);
              }}
            >
              <Image source={require("@assets/btn_x.png")} style={styles.closeButtonImage} />
            </TouchableOpacity>
          </View>
          <Modal.Body>
            <View style={styles.modalBodyContainer}>
              <Image source={require("@assets/cat-in-the-cup.png")} style={styles.catInCupImage} />
              <Text weight="400" style={styles.errorText}>
                {signUpError
                  ? signUpErrorMessage
                  : logInError
                  ? logInErrorMessage
                  : nicknameError
                  ? nicknameErrorMessage
                  : "알 수 없는 에러가 발생했어요!"}
              </Text>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <View style={styles.modalBodyContainer}>
              <ButtonNormal
                title="돌아가기"
                style={{ width: 260, maxHeight: 48 }}
                onPress={() => {
                  errorStateDuringAuth.modalVisibility.set(false);
                }}
              />
            </View>
          </Modal.Footer>
        </Modal.Container>
      </View>
    </Modal>
  );
}
