import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  LogBox,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../shared/globalStyles";
import useArticleContext from "../hooks/useArticleContext";
import Carousel from "react-native-snap-carousel";
import SingleArticle from "../components/SingleArticle";

LogBox.ignoreLogs(["Warning: ..."]); //TODO: Temporarily Ignore log notification by message
LogBox.ignoreAllLogs(); //TODO: Temporarily Ignore all log notifications

const ArticleScreen = () => {
  const { articles, isLoading, hasNextPage, fetchNextPage } =
    useArticleContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const windowHeight = Dimensions.get("window").height;
  const [showLoader, setShowLoader] = useState(isLoading);

  const onReachedEnd = () => {
    if (hasNextPage && !isLoading) {
      setShowLoader(true);
      fetchNextPage();
    }
  };
  return (
    <View
      style={{
        ...styles.carousel,
        backgroundColor: globalStyles.secondaryBackgroundColor,
      }}
    >
      {articles && (
        <Carousel
          keyExtractor={(article) => article._id}
          layout={"stack"}
          data={articles}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleArticle item={item} index={index} />
          )}
          onSnapToItem={
            (index) => {
              setShowLoader(false);
              if (index === articles?.length - 1) {
                console.log("Refresh Data ------->", index);
                onReachedEnd();
              }
            }
            // setActiveIndex(index)
          }
          inverted={true}
          onEndReached={() => {
            console.log("onEndReached.........>>>>>");
            // onReachedEnd();
          }}
          onEndReachedThreshold={0.5}
        />
      )}
      {showLoader && (
        <View style={styles.loader}>
          {/* <Text
          style={{
            color: "#000000",
            fontSize: 24,
            fontWeight: "400",
          }}
        >{`Loading... ${isLoading}`}</Text> */}
          <ActivityIndicator color={"#FFFFFF"} size={36} />
        </View>
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
  loader: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "#181818",
    // opacity: 0.8,
  },
});
