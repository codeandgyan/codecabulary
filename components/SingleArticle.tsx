import { StyleSheet, Text, View, Image } from "react-native";
import React, { useCallback } from "react";
import CodingArticle from "./Articles/CodingArticle";
import { globalStyles } from "../shared/globalStyles";
import LogoImg from "../assets/codecabulary-white-transparent.png";
import AnalogyArticle from "./Articles/AnalogyArticle";

type Props = {
  article: Article;
  screenSize: { width: number; height: number };
};

const SingleArticle = ({ article, screenSize }: Props) => {
  const renderArticleBody = useCallback((article: Article) => {
    if (article.example) return <CodingArticle article={article} />;
    if (article.analogies) return <AnalogyArticle article={article} />;
  }, []);
  return (
    <View
      style={{
        ...styles.container,
        width: screenSize.width,
        height: screenSize.height,
      }}
    >
      <View
        style={{
          ...styles.headlineContainer,
          backgroundColor: globalStyles.color1,
          shadowColor: globalStyles.color1,
        }}
      >
        <Text
          style={{
            ...styles.titleText,
            color: globalStyles.textColor,
          }}
        >
          {`${article.title}`}
        </Text>
        {/* <HorizontalLine color={globalStyles.textColor} width={2} /> */}
        <Text
          style={{
            ...styles.categoryText,
            color: globalStyles.textColorSecondary,
          }}
        >
          {`[${article.category}]`}
        </Text>
      </View>
      <View
        style={{
          ...styles.bodyContainer,
          backgroundColor: globalStyles.color2,
          shadowColor: globalStyles.color1,
        }}
      >
        <>{renderArticleBody(article)}</>
        <View style={styles.logoImageContainer}>
          <Image source={LogoImg} style={styles.logoImage} />
        </View>
      </View>
    </View>
  );
};

export default SingleArticle;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  headlineContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      height: 0.4,
      width: 0.8,
    },
    shadowRadius: 12,
    shadowOpacity: 0.6,
    paddingVertical: 12,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 8,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 2,
  },
  bodyContainer: {
    // position: "relative",
    flex: 1,
    marginBottom: 12,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 16,
    gap: 16,
    shadowOffset: {
      height: 0.8,
      width: 0.4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.8,
    zIndex: 2,
  },
  logoImageContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "center",
    bottom: -1,
    right: -1,
  },
  logoImage: {
    width: 80,
    height: 80,
  },
});
