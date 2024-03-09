import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  StatusBar,
  Animated,
  Platform,
  Dimensions,
} from "react-native";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { globalStyles } from "../shared/globalStyles";
import LogoImg from "../assets/codecabulary-white-transparent.png";
import HorizontalLine from "./HorizontalLine";
import CodeSnippet from "./CodeSnippet";
import { CONFIG } from "../shared/constants";

type Props = {
  item: Article;
  index: number;
  scrollY: Animated.Value;
  parentScreenSize: { width: number; height: number };
};

const FACTOR = 40;

const ArticleOld = ({ item, index, scrollY, parentScreenSize }: Props) => {
  // const { width, height: windowHeight } = useWindowDimensions();
  // const screenDimensions = Dimensions.get("screen");
  // const height = screenDimensions.height;
  // const inputRange = [-1, 0, (height - 50) * index, (height - 50) * (index + 2)];

  // const scale = scrollY.interpolate({
  //   inputRange,
  //   outputRange: [0, 1, 1, 1],
  // });
  // console.log(scale);

  // const pageHeight = useMemo(() => {
  //   // console.log(
  //   //   "bottomNavBar",
  //   //   height -
  //   //     (height +
  //   //       (StatusBar?.currentHeight ?? Constants.statusBarHeight) * 2),
  //   //   Platform.OS
  //   // );
  //   if (Platform.OS === "ios") {
  //     return (
  //       windowHeight -
  //       (StatusBar?.currentHeight ?? Constants.statusBarHeight) -
  //       34 -
  //       FACTOR
  //     );
  //   }
  //   return windowHeight - FACTOR;
  // }, [windowHeight, height, index, screenDimensions]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        backgroundColor: globalStyles.color1,
        width: parentScreenSize.width,
        height: parentScreenSize.height,
        // transform: [{ scale }],
      }}
    >
      <Text style={{ ...styles.conceptText, color: globalStyles.textColor }}>
        {`${index}. ${item.concept}`}
      </Text>
      <View style={styles.separator}>
        <HorizontalLine color={globalStyles.textColorSecondary} width={1} />
      </View>
      <Text
        style={{
          ...styles.topicText,
          color: globalStyles.textColorSecondary,
        }}
      >
        {`[${item.topic}]`}
      </Text>
      <View
        style={{
          ...styles.detailsContainer,
          backgroundColor: globalStyles.color2,
          borderColor: "#5D5D5D",
        }}
      >
        <Text style={{ ...styles.description, color: "#CCCCCC" }}>
          {item.explanation}
        </Text>

        <ScrollView
          style={{
            ...styles.scrollView,
            backgroundColor: globalStyles.color6,
          }}
        >
          <View
            style={{
              ...styles.codesnippetContainer,
              backgroundColor: globalStyles.color6,
            }}
          >
            <CodeSnippet snippet={item.example?.snippet ?? ""} language="" />
          </View>
        </ScrollView>

        {item.example?.description && (
          <Text
            style={{
              ...styles.description,
              color: "#CCCCCC",
            }}
          >
            {item.example.description}
          </Text>
        )}
        <View style={styles.codeLogoContainer}>
          <Image source={LogoImg} style={styles.codeLogo} />
        </View>
      </View>
    </Animated.View>
  );
};

export default ArticleOld;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // marginVertical: 20,
    borderRadius: 16,

    borderColor: "yellow",
    borderWidth: 2,
  },
  conceptText: {
    textAlign: "center",
    // fontFamily: "Arial",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "800",
    // marginTop: 8,
  },
  separator: {
    marginVertical: 4,
  },
  topicText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 22,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    borderWidth: 2,
    borderRadius: 20,
    padding: 16,
    gap: 20,
  },
  description: {
    // fontFamily: "Menlo",
    fontSize: 14,
    fontWeight: "400",
    // marginVertical: 20,
    // marginBottom: 10,
    // height: "auto",
  },
  scrollView: {
    flex: 1,
  },
  codesnippetContainer: {
    paddingVertical: 8,
    // flex: 1,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  codeLogoContainer: {
    flexDirection: "row",
    height: "10%",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  codeLogo: {
    width: 60,
    height: 60,
  },
});
