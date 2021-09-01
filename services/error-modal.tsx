import React, { ReactElement } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ButtonNormal, Modal, Text } from "@Components";

// Need to separate error message

export default function ErrorModal(): ReactElement {
  return (
    <Modal isVisible={true}>
      <View style={styles.modalContainer}>
        <Modal.Container>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image source={require("@assets/btn_x.png")} style={styles.closeButtonImage} />
            </TouchableOpacity>
          </View>
          <Modal.Body>
            <View style={styles.modalBodyContainer}>
              <Image source={require("@assets/cat-in-the-cup.png")} style={styles.catInCupImage} />
              <Text weight="400" style={styles.errorText}>
                {"이미 있는 아이디입니다!"}
              </Text>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <View style={styles.modalBodyContainer}>
              <ButtonNormal title="돌아가기" style={{ width: 260, maxHeight: 48 }} />
            </View>
          </Modal.Footer>
        </Modal.Container>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 201,
    marginBottom: 187,
    marginLeft: 24,
    marginRight: 24
  },
  closeButtonContainer: {
    alignItems: "flex-end",
    marginTop: 24,
    marginBottom: 1,
    marginRight: 16
  },
  closeButtonImage: {
    resizeMode: "contain",
    maxWidth: 21,
    maxHeight: 21,
    marginBottom: 0
  },
  modalBodyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  catInCupImage: {
    marginTop: 0,
    marginBottom: 18,
    paddingLeft: 100,
    paddingRight: 100,
    resizeMode: "contain",
    maxWidth: 112,
    maxHeight: 112
  },
  errorText: {
    color: "#000000",
    fontSize: 14,
    lineHeight: 20
  },
  modalFooterContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 16,
    marginRight: 16
  }
});
