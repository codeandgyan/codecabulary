import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";

import CodingTermsIcon from "../assets/CodingTerms-Icon.png";
import TrendingIcon from "../assets/TrendingIcon.png";
import HowToIcon from "../assets/HowToIcon.png";
import DifferencesIcon from "../assets/DifferencesIcon.png";

declare type Category = {
  name: string;
  image: ImageSourcePropType;
};
const categories: Category[] = [
  { image: CodingTermsIcon, name: "Coding Terms" },
  { image: TrendingIcon, name: "Trending" },
  { image: HowToIcon, name: "How to..." },
  { image: DifferencesIcon, name: "Differences" },
  { image: DifferencesIcon, name: "Analogies" },
  { image: DifferencesIcon, name: "Why" },
];

const Categories = () => {
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        horizontal
        scrollEnabled
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.category}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text
              style={{
                ...styles.categoryText,
                color: globalStyles.textColor,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    width: "100%",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  category: {
    alignItems: "center",
    margin: 2,
    gap: 8,
    // padding: 8,
    width: 100,
    // borderWidth: 1,
    // borderColor: "lightblue",
    // borderRadius: 5,
  },
  categoryText: {
    fontSize: 14,
    textAlign: "center",
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
