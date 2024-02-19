import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../shared/globalStyles";

type Props = {
  article: Article;
};
const AnalogyArticle = ({ article }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        gap: 8,
      }}
    >
      <Text style={{ color: globalStyles.textColor }}>{`${
        article.analogies?.para1
      }`}</Text>
      <Text style={{ color: globalStyles.textColor }}>{`${
        article.analogies?.para1 ?? ""
      }`}</Text>
      <Text style={{ color: globalStyles.textColor }}>{`${
        article.analogies?.para2 ?? ""
      }`}</Text>
      <Text style={{ color: 'yellow' }}>Analogy Article</Text>
    </View>
  );
};

export default AnalogyArticle;

const styles = StyleSheet.create({});
