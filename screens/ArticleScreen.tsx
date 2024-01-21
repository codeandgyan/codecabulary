import { Dimensions, StyleSheet, Text, View, LogBox } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../shared/globalStyles";
import useArticleContext from "../hooks/useArticleContext";
import Carousel from "react-native-snap-carousel";
import SingleArticle from "../components/SingleArticle";

LogBox.ignoreLogs(['Warning: ...']); //TODO: Temporarily Ignore log notification by message
LogBox.ignoreAllLogs(); //TODO: Temporarily Ignore all log notifications

const ArticleScreen = () => {
  const { articles } = useArticleContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        ...styles.carousel,
        backgroundColor: globalStyles.secondaryBackgroundColor,
      }}
    >
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleArticle item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
          inverted={true}
        />
      )}
    </View>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    // transform:[{scaleY: -1}],
  },
});
