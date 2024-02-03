import {
  StyleSheet,
  View,
  LogBox,
  FlatList,
  useWindowDimensions,
  Animated,
  ActivityIndicator,
  Text,
  LayoutChangeEvent,
  StatusBar,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { globalStyles } from "../shared/globalStyles";
import useArticleContext from "../hooks/useArticleContext";
import SingleArticle from "../components/SingleArticle";
import { CONFIG } from "../shared/constants";
import HorizontalLine from "../components/HorizontalLine";

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

  useEffect(() => {
    // setLoading(
    //   status === "pending" || isFetchingNextPage || isFetchingPreviousPage
    // );
  }, [status, isFetchingNextPage, isFetchingNextPage]);
  const { width, height } = useWindowDimensions();

  const scrollY = useRef(new Animated.Value(0)).current;

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
          Loading...
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

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Animated.FlatList
        data={articles}
        keyExtractor={(article) => article._id}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        // ItemSeparatorComponent={() => (
        //   <HorizontalLine color="#FFFFFF" width={3} />
        // )}
        renderItem={({ item, index }) => {
          // return <SingleArticle item={item} index={index} scrollY={scrollY} parentScreenSize={screenSize} />;
          return (
            <View
              style={{
                width: screenSize.width,
                height: screenSize.height,
                backgroundColor: index % 2 === 0 ? globalStyles.secondaryBackgroundColor : globalStyles.backgroundColorFour,
              }}
            >
              <Text
                style={{
                  color: globalStyles.textColor,
                }}
              >
                {`${index}: ${item.title}`}
              </Text>
            </View>
          );
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
  //       // backgroundColor: globalStyles.primaryBackgroundColor,
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
    fontWeight: "800",
  },
});
