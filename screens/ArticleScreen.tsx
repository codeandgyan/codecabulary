import {
  StyleSheet,
  View,
  LogBox,
  Animated,
  ActivityIndicator,
  Text,
  LayoutChangeEvent,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { globalStyles } from "../shared/globalStyles";
import useArticleContext from "../hooks/useArticleContext";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<any>();
  console.log(status, isFetchingNextPage, isFetchingPreviousPage);

  useEffect(() => {
    setLoading(
      status === "pending" || isFetchingNextPage || isFetchingPreviousPage
    );
  }, [status, isFetchingNextPage, isFetchingNextPage]);

  const onEndReached = () => {
    console.log("onEndReached");
    setLoading(true);
    loadNextPage();
  };

  const listFooterComponent = useCallback(() => {
    return loading ? (
      <View
        style={{
          ...styles.loader,
          backgroundColor: "#36454F",
          opacity: 0.8,
        }}
      >
        <ActivityIndicator
          size="small"
          style={{ opacity: 1 }}
          color={globalStyles.textColor}
        />
        <Text
          style={{
            ...styles.loadingText,
            color: globalStyles.textColor,
            opacity: 1,
          }}
        >
          Loading more...
        </Text>
      </View>
    ) : (
      <></>
    );
  }, []);

  const articleScreenRef = useRef<View>(null);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    console.log("width", width, "height", height);
    setScreenSize({ width, height });
  };

  useEffect(() => {}, [screenSize.width, screenSize.height]);

  if (status === "success" && articles?.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 40,
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: globalStyles.textColor,
            textAlign: "center",
          }}
        >
          Oops, there are no articles at this time!
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{ ...styles.container, backgroundColor: globalStyles.color6 }}
      onLayout={onLayout}
    >
      {/* <View
        style={{
          position: "absolute",
          flex: 1,
          justifyContent: "flex-end",
          width: screenSize.width,
          height: screenSize.height,
        }}
      >
        <View
          style={{
            flex: 0.2,
            backgroundColor: globalStyles.color5,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        />
      </View> */}
      <Animated.FlatList
        data={articles}
        keyExtractor={(article) => article._id}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          // return <SingleArticle item={item} index={index} scrollY={scrollY} parentScreenSize={screenSize} />;
          return <SingleArticle article={item} screenSize={screenSize} />;
        }}
        ref={slidesRef}
        onEndReached={onEndReached}
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );

  // return (
  //   <View
  //     style={{
  //       ...styles.container,
  //       // backgroundColor: globalStyles.color1,
  //     }}
  //   >
  //     <Animated.FlatList
  //       data={articles}
  //       keyExtractor={(article) => article._id}
  //       showsVerticalScrollIndicator={false}
  //       pagingEnabled={true}
  //       renderItem={({ item, index }) => {
  //         return <SingleArticle item={item} index={index} scrollY={scrollY} />;
  //       }}
  //       // onScroll={Animated.event(
  //       //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
  //       //   {
  //       //     useNativeDriver: true,
  //       //   }
  //       // )}
  //       ref={slidesRef}
  //       onEndReached={onEndReached}
  //       ListFooterComponent={listFooterComponent}
  //     />
  //   </View>
  // );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    justifyContent: "center",
  },
  loader: {
    // position: "absolute",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    width: "auto",
    height: "auto",
    justifyContent: "center",
    gap: 4,
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    // marginTop: -108,
    borderRadius: 25,
  },
  loadingText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
