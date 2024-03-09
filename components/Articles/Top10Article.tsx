import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { globalStyles } from "../../shared/globalStyles";
import SimpleCarouselItem from "./Carousel/SimpleCarouselItem";
import Prettier from "../../assets/kb/Prettier.png";
import LiveServer from "../../assets/kb/LiveServer.png";
import ES7Snippets from "../../assets/kb/ES7Snippets.png";

const content = [
  {
    page: 1,
    title: "Title 1",
    description: "This is carousel 1",
    img: Prettier,
  },
  {
    page: 2,
    title: "Title 2",
    description: "This is carousel 2",
    img: LiveServer,
  },
  {
    page: 3,
    title: "Title 3",
    description: "This is carousel 3",
    img: ES7Snippets,
  },
  // { page: 4, title: "Title 4", description: "This is carousel 4" },
  // { page: 5, title: "Title 5", description: "This is carousel 5" },
  // { page: 6, title: "Title 6", description: "This is carousel 6" },
  // { page: 7, title: "Title 7", description: "This is carousel 7" },
  // { page: 8, title: "Title 8", description: "This is carousel 8" },
  // { page: 9, title: "Title 9", description: "This is carousel 9" },
  // { page: 10, title: "Title 10", description: "This is carousel 10" },
];

type Props = {
  article: Article;
  screenSize: { width: number; height: number };
};

const Top10Article = ({ article, screenSize }: Props) => {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   const handleViableItemsChanged = useCallback(
  //     ({ changed }: { changed: any }) => {
  //       if (changed[0].isViewable) {
  //         setCurrentIndex(changed[0].index);
  //       }
  //     },
  //     []
  //   );
  const renderDotIndicators = useCallback(() => {
    return content.map((_dot, index) => {
      return (
        <View
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.3)",
            height: 10,
            width: 10,
            borderRadius: 50,
          }}
        />
      );
    });
  }, []);
  return (
    <View
      style={{
        ...styles.container,
        width: screenSize.width,
        height: screenSize.height,
      }}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Visual_Studio_Code_1.35_icon.png",
        }}
        style={styles.titleImage}
      />
      <Text style={{ ...styles.headline, color: globalStyles.textColor }}>
        Top 10 VS Code Extensions you must have
      </Text>
      <View
        style={{
          ...styles.bodyContainer,
          width: screenSize.width,
        }}
      >
        <FlatList
          keyExtractor={(item) => item.page.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          data={content}
          renderItem={({ item }) => (
            <SimpleCarouselItem
              item={item}
              screenSize={screenSize}
              img={item.img}
            />
          )}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            top: -24,
          }}
        >
          {renderDotIndicators()}
        </View>
      </View>
    </View>
  );
};

export default Top10Article;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    paddingTop: 20,
    gap: 20,
  },
  headline: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 4,
  },
  titleImage: {
    width: 96,
    height: 96,
    resizeMode: "contain",
  },
  bodyContainer: {
    flex: 0.84,
  },
});
