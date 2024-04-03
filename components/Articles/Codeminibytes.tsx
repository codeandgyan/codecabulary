import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { globalStyles } from "../../shared/globalStyles";
import CodeMinibyteData from "../../assets/kb/codeminibytes.json";
import CodeminibyteItem from "./Carousel/CodeminibyteItem";

const codeminibytes = CodeMinibyteData.codeminibytes;

type Props = {
  article: Article;
  screenSize: { width: number; height: number };
  index: number;
};

const Codeminibytes = ({ article, screenSize, index }: Props) => {
  const byte = codeminibytes[index] ?? codeminibytes[0];
  const renderDotIndicators = useCallback(() => {
    return byte.description.map((_dot, index) => {
      return (
        <View
          style={{
            backgroundColor: globalStyles.colorYellowShade,
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
          uri: byte.imageUrl ? byte.imageUrl : undefined,
        }}
        alt={byte.headline}
        style={{ ...styles.titleImage, width: screenSize.width }}
      />
      <View
        style={{
          ...styles.bodyContainer,
          width: screenSize.width,
          backgroundColor: globalStyles.color7,
        }}
      >
        <Text style={{ ...styles.headline, color: globalStyles.textColor }}>
          {byte.headline}
        </Text>
        <FlatList
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          data={byte.description}
          renderItem={({ item }) => (
            <CodeminibyteItem itemText={item} screenSize={screenSize} />
          )}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "flex-start",
            top: -12,
          }}
        >
          {renderDotIndicators()}
        </View>
      </View>
    </View>
  );
};

export default Codeminibytes;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  titleImage: {
    // width: 200,
    height: 200,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  headline: {
    fontSize: 28,
    fontWeight: "700",
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "center",
    textAlign: "center",
  },
  bodyContainer: {
    flex: 0.8,
    gap: 12,
    justifyContent: "center",
    borderRadius: 20,
    paddingVertical: 12,
  },
});
