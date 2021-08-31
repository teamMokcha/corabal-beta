import React, { ReactElement, useLayoutEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonGradient, ButtonNormal, Text, Modal } from "@Components";
import styles from "./profile.style";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "@config/navigator";
import { loggingOut } from "@apis/auth-firebase";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState } from "../../store/stores";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Profile">;
};

export default function Profile({ navigation }: NavigationProps): ReactElement {
  const [isCallingCat, setIsCallingCat] = useState(false);
  const [isDeletedAccount, setIsDeletedAccount] = useState(false);
  const currentUserState = HSUseState(globalUserState);
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 11, height: 22, marginLeft: 16, marginRight: 16 }}
              source={require("@assets/btn_back.png")}
            />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);

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
          <ButtonGradient
            onPress={() => setIsCallingCat(!isCallingCat)}
            style={styles.gradientButton}
            title="고양이 부르기"
          />
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
          onPress={() => {
            loggingOut();
            currentUserState.loggedIn.set(false);
          }}
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
              <ButtonNormal
                style={styles.deleteButton}
                title="계정 삭제하기"
                onPress={() => setIsDeletedAccount(!isDeletedAccount)}
              />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
        {/* When press calling cat button */}
        <Modal isVisible={isCallingCat}>
          <Modal.Container>
            <Modal.Body>
              <TouchableOpacity onPress={() => setIsCallingCat(!isCallingCat)}>
                <Image style={styles.buttonX} source={require("@assets/btn_x.png")} />
              </TouchableOpacity>
              <Image style={styles.modalCatInCup} source={require("@assets/cat-in-the-cup.png")} />
              <Text>고양이를 부르시겠습니까?</Text>
              <Text style={styles.pointFont}>
                내 포인트{" "}
                <Image style={styles.pointImage} source={require("@assets/btn_point.png")} />
                <Text>151p</Text>
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <ButtonNormal
                onPress={() => setIsCallingCat(!isCallingCat)}
                style={styles.modalButton}
                title="결제하기"
              />
              <ButtonGradient
                onPress={() => setIsCallingCat(!isCallingCat)}
                style={styles.modalButton}
                title="광고보기"
              />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      </View>
    </View>
  );
}
