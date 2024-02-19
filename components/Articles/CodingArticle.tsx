import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CodeImage from "../CodeImage";
import { globalStyles } from "../../shared/globalStyles";

type Props = {
  article: Article;
};

export default function CodingArticle({ article }: Props) {
  return (
    <>
      <Text
        style={{
          ...styles.para,
          color: globalStyles.textColorSecondary,
        }}
      >
        {`${article.explanation}`}
      </Text>
      <CodeImage id={article._id} snippet={article.example?.snippet} />
      {article.example?.description && (
        <Text
          style={{
            ...styles.para,
            color: globalStyles.textColorSecondary,
          }}
        >
          {`${article.example.description}`}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  para: {
    fontSize: 16,
  },
});
