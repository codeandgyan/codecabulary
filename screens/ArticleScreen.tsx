import {
  StyleSheet,
  View,
  LogBox,
  Animated,
  ActivityIndicator,
  Text,
  LayoutChangeEvent,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { globalStyles } from "../shared/globalStyles";
import useArticleContext from "../hooks/useArticleContext";
import CodeImage from "../components/CodeImage";
import LogoImg from "../assets/codecabulary-white-transparent.png";
import { FontAwesome5 } from "@expo/vector-icons";

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

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View
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
            flex: 0.1,
            backgroundColor: globalStyles.highlightcolor1,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        />
      </View>
      <Animated.FlatList
        data={articles}
        keyExtractor={(article) => article._id}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          // return <SingleArticle item={item} index={index} scrollY={scrollY} parentScreenSize={screenSize} />;
          return (
            <View
              style={{
                width: screenSize.width,
                height: screenSize.height,
                flex: 1,
                alignItems: "center",
                paddingHorizontal: 12,
              }}
            >
              <View
                style={{
                  marginTop: 20,
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: globalStyles.color1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  shadowColor: globalStyles.color1,
                  shadowOffset: {
                    height: 0.4,
                    width: 0.8,
                  },
                  shadowRadius: 12,
                  shadowOpacity: 0.6,
                  paddingVertical: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    color: globalStyles.textColor,
                    textAlign: "center",
                    paddingHorizontal: 8,
                  }}
                >
                  {`${item.title}`}
                </Text>
                {/* <HorizontalLine color={globalStyles.textColor} width={2} /> */}
                <Text
                  style={{
                    fontSize: 12,
                    color: globalStyles.textColorSecondary,
                    marginTop: 2,
                  }}
                >
                  {`[${item.category}]`}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginBottom: 12,
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  // borderWidth: 1,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  padding: 16,
                  gap: 20,
                  backgroundColor: globalStyles.color2,
                  shadowColor: globalStyles.color1,
                  shadowOffset: {
                    height: 0.8,
                    width: 0.4,
                  },
                  shadowRadius: 8,
                  shadowOpacity: 0.8,
                  zIndex: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: globalStyles.textColorSecondary,
                  }}
                >
                  {`${item.explanation}`}
                </Text>
                <CodeImage
                  id={item._id}
                  hasSnippet={item.example?.snippet ? true : false}
                />
                {item.example?.description && (
                  <Text
                    style={{
                      fontSize: 16,
                      color: globalStyles.textColorSecondary,
                    }}
                  >
                    {`${item.example.description}`}
                  </Text>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                  }}
                >
                  <Image
                    source={LogoImg}
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  />
                </View>
              </View>
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
    backgroundColor: globalStyles.color4,
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
