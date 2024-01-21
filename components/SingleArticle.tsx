import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import HorizontalLine from "./HorizontalLine";
import LogoImg from "../assets/codecabulary-white-transparent.png";
import CodeSnippet from "./CodeSnippet";

type Props = {
  item: Article;
  index: number;
};

const SingleArticle = ({ item, index }: Props) => {
  const windowDimensions = Dimensions.get("window");
  const windowHeight = windowDimensions.height;
  const windowWidth = windowDimensions.width;
  return (
    <View
      style={{
        ...styles.container,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: globalStyles.primaryBackgroundColor,
        // transform:[{scaleY: -1}],
      }}
    >
      <Text style={{ ...styles.titleText, color: globalStyles.textColor }}>
        {item.title}
      </Text>
      <View style={styles.separator}>
        <HorizontalLine color={globalStyles.textColor} width={1} />
      </View>
      <Text style={{ ...styles.categoryText, color: "#CCCCCC" }}>
        {`[${item.category}]`}
      </Text>
      <View
        style={{
          ...styles.detailsContainer,
          backgroundColor: globalStyles.secondaryBackgroundColor,
        }}
      >
        <Text style={{ ...styles.description, color: "#CCCCCC" }}>
          {item.explanation}
        </Text>
        <ScrollView style={styles.codesnippetContainer}>
          <CodeSnippet
            snippet={item.example?.snippet ?? ""}
            language="javascript"
          />
        </ScrollView>
        <View style={styles.codeLogoContainer}>
          <Image source={LogoImg} style={styles.codeLogo} />
        </View>
      </View>
    </View>
  );
};

export default SingleArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 5,
    padding: 12,
    // borderRadius: 20,
    // shadowColor: "#FFFFFF",
    // shadowRadius: 1,
    // shadowOpacity: 0.3,
    // shadowOffset: {
    //   height: 1,
    //   width: 1,
    // },
  },
  titleText: {
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "800",
    marginTop: 30,
  },
  separator: {
    marginVertical: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 30,
  },
  detailsContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#5D5D5D",
    padding: 20,
    height: "60%",
  },
  codeLogoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    // alignItems: "flex-end",
  },
  codeLogo: {
    width: 60,
    height: 60,
  },
  description: {
    // fontFamily: "Menlo",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10,
  },
  codesnippetContainer: {
    paddingVertical: 8,
    // alignItems: "center",
    alignContent: "center",
    maxWidth: 350,
    height: 250,
    alignSelf: "center",
  },
});
