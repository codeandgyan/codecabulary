import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../shared/globalStyles";


type Props = {
  item: CarouselBody;
  screenSize: { width: number; height: number };
  img: ImageSourcePropType;
};

const SimpleCarouselItem = ({ item, screenSize, img }: Props) => {
  return (
    <View
      style={{
        ...styles.body,
        width: screenSize.width,
      }}
    >
      <View
        style={{
          ...styles.content,
        }}
      >
        <Image source={img} style={styles.image} />
        {/* <Text
          style={{
            ...styles.titleText,
            color: globalStyles.textColorSecondary,
          }}
        >
          {`${item.page}`}
        </Text>
        <Text
          style={{
            ...styles.titleText,
            color: globalStyles.textColorSecondary,
          }}
        >
          {`${item.title}`}
        </Text>
        <Text
          style={{
            ...styles.titleText,
            color: globalStyles.textColorSecondary,
          }}
        >
          {`${item.description}`}
        </Text> */}
      </View>
    </View>
  );
};

export default SimpleCarouselItem;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 12,
  },
  content: {
    backgroundColor: globalStyles.color2,
    alignItems: "center",
    flex: 1,
    borderRadius: 20,
  },
  image: {
    height: 360,
    width: 360,
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
