import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, ImageBackground } from "react-native";

import Carousel from "react-native-snap-carousel";

interface ItemProps {
  title: string;
  author: string;
  text: string;
  backgroundImg: string;
}

interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const exampleItems = [
  {
    title: "시럽이 몸에 끼치는 영향",
    author: "Name",
    text: "시럽은 몸에 좋지 않습니다. 시럽을 줄이세요 . 그...",
    backgroundImg: "@assets/slide01.png"
  },
  {
    title: "Title 2",
    author: "Name",
    text: "Text 2",
    backgroundImg: "@assets/slide01.png"
  },
  {
    title: "Title 3",
    author: "Name",
    text: "Text 3",
    backgroundImg: "@assets/slide01.png"
  },
  {
    title: "Title 4",
    author: "Name",
    text: "Text 4",
    backgroundImg: "@assets/slide01.png"
  },
  {
    title: "Title 5",
    author: "Name",
    text: "Text 5",
    backgroundImg: "@assets/slide01.png"
  }
];

const CustomCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <ImageBackground source={require("@assets/slide01.png")} style={{ width: 280, height: 155 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            backgroundColor: "rgba(117, 116, 116, 0.35)"
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 84,
              marginLeft: 12,
              marginBottom: 4
            }}
          >
            {item.title}
          </Text>
          <Text style={{ color: "white", fontSize: 12, marginLeft: 12 }}>by {item.author}</Text>
          <Text style={{ color: "white", fontSize: 12, marginLeft: 12 }}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  }, []);

  return (
    <SafeAreaView style={{ marginBottom: 60, marginLeft: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          loop={true}
          layout={"default"}
          ref={ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;
