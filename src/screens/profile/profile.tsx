import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { ButtonGradient, ButtonNomal, Text, Modal } from "@Components";
import styles from "./profile.style";
import { useState } from "react";

export default function Profile(): ReactElement {
  const [isDeletedAccount, setIsDeletedAccount] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.profileImage} source={require("@assets/profile.png")} />
        <View style={styles.user}>
          <Text onPress={() => console.log("누르면 이름을 바꿀 수 있음")} style={styles.userName}>
            커라밸님
          </Text>
          <Image style={styles.userNameUpdate} source={require("@assets/updating-user-name.png")} />
        </View>
        <Text style={styles.userMail}>coffeeout@gmail.com</Text>
      </View>
      <View style={styles.records}>
        <View style={styles.record}>
          <Text style={styles.recordsTitle}>기록</Text>
          <Text style={styles.recordFonts}>48</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordsTitle}>포인트</Text>
          <Text style={styles.recordFonts}>50P</Text>
          <ButtonGradient style={styles.gradientButton} title="광고 보기 5p" />
        </View>
        <View style={styles.record}>
          <Text style={styles.recordsTitle}>내 컵</Text>
          <Image style={styles.catInCup} source={require("@assets/cat-in-the-cup.png")} />
          <ButtonGradient style={styles.gradientButton} title="고양이 부르기" />
        </View>
      </View>
      <View style={styles.config}>
        <Text
          style={styles.configScripts}
          onPress={() => console.log("비밀번호 설정하는 페이지로 이동")}
        >
          비밀번호 재설정
        </Text>
        <Text
          style={styles.configScripts}
          onPress={() => console.log("로그아웃 후 인트로 페이지로 이동")}
        >
          로그아웃
        </Text>
        <Text style={styles.accountDeletion} onPress={() => setIsDeletedAccount(!isDeletedAccount)}>
          계정 삭제
        </Text>
        {/* When press delete account button */}
        <Modal isVisible={isDeletedAccount}>
          <Modal.Container>
            <Modal.Header title="정말 삭제하시겠습니까?" />
            <Modal.Body>
              <Text>계정을 삭제하시면 뭐시기 저시기가 안 돼요!</Text>
            </Modal.Body>
            <Modal.Footer>
              <ButtonGradient
                style={styles.deleteButton}
                title="계정 유지하기"
                onPress={() => setIsDeletedAccount(!isDeletedAccount)}
              />
              <ButtonNomal
                style={styles.deleteButton}
                title="계정 삭제하기"
                onPress={() => setIsDeletedAccount(!isDeletedAccount)}
              />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      </View>
    </View>
  );
}
