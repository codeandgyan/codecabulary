import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  LogBox,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../shared/globalStyles";
import useArticleContext from "../hooks/useArticleContext";
import Carousel, { Pagination } from "react-native-snap-carousel";
import SingleArticle from "../components/SingleArticle";

LogBox.ignoreLogs(["Warning: ..."]); //TODO: Temporarily Ignore log notification by message
LogBox.ignoreAllLogs(); //TODO: Temporarily Ignore all log notifications

const ArticleScreen = () => {
  const {
    articles,
    loadNextPage,
    status,
    isFetchingPreviousPage,
    isFetchingNextPage,
    setCurrentId,
  } = useArticleContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(
      status === "pending" || isFetchingNextPage || isFetchingPreviousPage
    );
  }, [status, isFetchingNextPage, isFetchingNextPage]);
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
          keyExtractor={(article) => article._id}
          layout={"stack"}
          data={articles}
          sliderHeight={100}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleArticle item={item} index={index} />
          )}
          // onBeforeSnapToItem={(index) => {
          //   if (index === articles?.length - 1 && !loading) {
          //     setLoading(true);
          //     setTimeout(() => {
          //       console.log("Refresh Data ------->", index);
          //       loadNextPage();
          //     }, 100);
          //   }
          // }}
          onSnapToItem={(index) => {
            if (index === articles?.length - 1) {
              loadNextPage();
            }
          }}
          inverted={true}
          onEndReached={() => {
            console.log("onEndReached.........>>>>>");
            // loadNextPage();
          }}
          onEndReachedThreshold={0.5}
        />
      )}
      {loading && (
        <View
          style={{
            ...styles.loader,
            backgroundColor: globalStyles.primaryBackgroundColor,
          }}
        >
          <ActivityIndicator />
          <Text
            style={{
              color: globalStyles.textColor,
              fontSize: 16,
              fontWeight: "500",
            }}
          >{`Loading...`}</Text>
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
    paddingVertical: 4,
  },
});
