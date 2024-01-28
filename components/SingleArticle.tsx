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
          borderColor: "#5D5D5D",
        }}
      >
        <Text style={{ ...styles.description, color: "#CCCCCC" }}>
          {item.explanation}
        </Text>

        <ScrollView
          style={{
            ...styles.scrollView,
            backgroundColor: globalStyles.ternaryBackgroundColor,
          }}
        >
          <View
            style={{
              ...styles.codesnippetContainer,
              backgroundColor: globalStyles.ternaryBackgroundColor,
            }}
          >
            <CodeSnippet snippet={item.example?.snippet ?? ""} language="" />
          </View>
        </ScrollView>
        {item.example?.description && (
          <Text
            style={{
              ...styles.description,
              fontSize: 14,
              color: "#CCCCCC",
              marginTop: 10,
            }}
          >
            {item.example.description}
          </Text>
        )}
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    // fontFamily: "Arial",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "800",
    marginTop: 22,
  },
  separator: {
    marginVertical: 4,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 22,
  },
  detailsContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth: 2,
    borderRadius: 20,
    padding: 16,
    height: "65%",
  },
  description: {
    // fontFamily: "Menlo",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10,
    height: "auto",
  },
  scrollView: {
    flex: 1,
  },
  codesnippetContainer: {
    paddingVertical: 8,
    flex: 1,
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
