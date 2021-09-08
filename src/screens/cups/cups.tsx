import React, { ReactElement, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text, Header } from "@Components";
import styles from "./cups.style";
// import firebase from "firebase";

const Cups = (): ReactElement => {
  // const [test, setTest] = useState();
  // // Points to the root reference
  // const storageRef = firebase.storage().ref();
  // // Points to 'images/space.jpg'
  // const testImgRef = storageRef.child("cups/1shot.png");
  // testImgRef
  //   .getDownloadURL()
  //   .then(url => {
  //     setTest(url);
  //   })
  //   .catch(error => console.error("error occurs:", error));

  // console.log(test);

  return (
    <>
      <Header back={true} close={false} />
      <ScrollView>
        <Text style={styles.myCupFont}>내 텀블러</Text>
        <View style={styles.presentCupContainer}>
          <Text style={styles.presentCupFont}>현재 텀블러</Text>
          <Image source={require("@assets/empty-cup.png")} />
        </View>
        <Text style={styles.cupsIHave}>보유 텀블러</Text>
        {/* 이거 정렬 어떻게 할지 생각해봐야 한다. */}
      </ScrollView>
    </>
  );
};

export default Cups;
