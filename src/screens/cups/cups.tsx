import React, { ReactElement } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text, Header } from "@Components";
import styles from "./cups.style";

const Cups = (): ReactElement => {
  return (
    <>
      <Header back={true} close={false} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.myTumbler}>내 텀블러</Text>
          <View style={styles.tumblerWrapper}>
            <Text style={styles.tumblerFonts}>현재 텀블러</Text>
            <Image style={styles.presentTumbler} source={require("@assets/empty-cup.png")} />
          </View>
          <View>
            <Text style={styles.myTumblersFonts}>보유 텀블러</Text>
            <View style={styles.tumblersWrapper}>
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
              <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Cups;
