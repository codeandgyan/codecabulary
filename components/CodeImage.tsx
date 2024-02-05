import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, {  } from "react";

type Props = {
  id: string;
  hasSnippet: boolean;
};

const CodeImage = ({ id, hasSnippet }: Props) => {
  const { width } = useWindowDimensions();

  return hasSnippet ? (
    <View
      style={{
        width: "100%",
        backgroundColor: "#9EAAB4",
        // borderColor: "yellow",
        // borderWidth: 1,
      }}
    >
      <Image
        source={{ uri: `http://192.168.29.59:3131/${id}.png` }}
        style={{
          resizeMode: "contain",
          backgroundColor: "#9EAAB4",
          // width: "100%",
          minHeight: 250,
          maxHeight: 450,
          borderRadius: 4,
        }}
      />
    </View>
  ) : (
    <></>
  );
};

export default CodeImage;

const styles = StyleSheet.create({});
