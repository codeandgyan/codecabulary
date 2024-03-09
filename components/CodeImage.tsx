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
    <View style={styles.container}>
      <Image
        source={{ uri: `http://192.168.29.59:3131/${id}.png` }}
        // source={{ uri: `http://192.168.1.8:3131/${id}.png` }}
        style={styles.codeImage}
      />
    </View>
  ) : (
    <></>
  );
};

export default CodeImage;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "auto",
    backgroundColor: globalStyles.highlightcolor1, //"#9EAAB4", #ABB8C3
    borderRadius: 2,
    padding: 12,
  },
  codeImage: {
    resizeMode: "stretch",
    backgroundColor: globalStyles.highlightcolor1, //"#9EAAB4", #ABB8C3
    // width: "100%",
    height: 250,
    borderRadius: 4,
  },
});
