import React, { ReactElement, useState } from "react";
import { TouchableOpacity, View, Image, ScrollView } from "react-native";
import { ButtonGradient, Text, Modal, ButtonNormal, Header } from "@Components";
import styles from "./shop.style";

const Shop = (): ReactElement => {
  const [wantToBuy, setWantToBuy] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  return (
    <>
      <Header back={true} close={false} />
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.profile}>
            <Image style={styles.profileImage} source={require("@assets/profile.png")} />
            <View>
              <Text style={styles.profileName}>
                <Text style={styles.profileBoldName}>커라밸</Text>님
              </Text>
              <Text style={styles.profilePointFont}>
                <Image style={styles.point} source={require("@assets/btn_point.png")} />
                {} 51p
              </Text>
            </View>
          </View>
          <ButtonGradient style={styles.watchingAd} title="광고 보기 5p" />
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => setWantToBuy(!wantToBuy)}
            activeOpacity={0.5}
            style={styles.cupWrapper}
          >
            <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
            <Text>
              <Image style={styles.point} source={require("@assets/btn_point.png")} />
              <Text>{} 30p</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setWantToBuy(!wantToBuy)}
            activeOpacity={0.5}
            style={styles.cupWrapper}
          >
            <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
            <Text>
              <Image style={styles.point} source={require("@assets/btn_point.png")} />
              <Text>{} 100p</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setWantToBuy(!wantToBuy)}
            activeOpacity={0.5}
            style={styles.cupWrapper}
          >
            <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
            <Text>
              <Image style={styles.point} source={require("@assets/btn_point.png")} />
              <Text>{} 100p</Text>
            </Text>
          </TouchableOpacity>
        </View>
        {/* Modal pop up when Press purchase button */}
        <Modal isVisible={wantToBuy}>
          <Modal.Container>
            <Modal.Body>
              <Image style={styles.buyingCup} source={require("@assets/empty-cup.png")} />
              <Text style={styles.pointFont}>
                <Image style={styles.point} source={require("@assets/btn_point.png")} />
                {} 100p
              </Text>
              {isBuying ? <Text>구매가 완료되었습니다!</Text> : <Text>정말 구매하시겠습니까?</Text>}
              <Text style={styles.myPointFont}>
                내 포인트 <Image style={styles.point} source={require("@assets/btn_point.png")} />
                {} 151p
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <ButtonNormal
                onPress={() => setWantToBuy(!wantToBuy)}
                style={styles.modalButton}
                title="취소"
              />
              <ButtonGradient
                onPress={() => {
                  setIsBuying(true);
                  setTimeout(() => setWantToBuy(!wantToBuy), 2000);
                }}
                style={styles.modalButton}
                title="구매"
              />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      </ScrollView>
    </>
  );
};

export default Shop;
