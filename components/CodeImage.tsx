import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";

type Props = {
  id: string;
  snippet?: string;
};

const CodeImage = ({ id, snippet }: Props) => {
  const hasSnippet = snippet ? true : false;

  return hasSnippet ? (
    <View
      style={{
        width: "100%",
        backgroundColor: globalStyles.highlightcolor1, //"#9EAAB4", #ABB8C3
        borderRadius: 2,
        padding: 8,
      }}
    >
      <Image
        source={{ uri: `http://192.168.29.59:3131/${id}.png` }}
        style={{
          resizeMode: "contain",
          backgroundColor: globalStyles.highlightcolor1, //"#9EAAB4", #ABB8C3
          width: "100%",
          height: "auto",
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
