import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import CodingTermsIcon from "../assets/CodingTerms-Icon.png";
import TrendingIcon from "../assets/TrendingIcon.png";
import HowToIcon from "../assets/HowToIcon.png";
import DifferencesIcon from "../assets/DifferencesIcon.png";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.optionsOuterContainer}>
        <View style={styles.optionsInnerContainer}>
          <View style={styles.option}>
            <Image
              source={CodingTermsIcon}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
            <Text
              style={{ ...styles.optionText, color: globalStyles.textColor }}
            >
              Coding Terms
            </Text>
          </View>
          <View style={styles.option}>
            <Image
              source={TrendingIcon}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
            <Text
              style={{ ...styles.optionText, color: globalStyles.textColor }}
            >
              Trending
            </Text>
          </View>
          <View style={styles.option}>
            <Image
              source={HowToIcon}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
            <Text
              style={{ ...styles.optionText, color: globalStyles.textColor }}
            >
              How to...
            </Text>
          </View>
          <View style={styles.option}>
            <Image
              source={DifferencesIcon}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
            <Text
              style={{ ...styles.optionText, color: globalStyles.textColor }}
            >
              Differences
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionsOuterContainer: {},
  optionsInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    alignItems: "center",
    gap: 8,
  },
  optionText: {
    fontSize: 14,
    textAlign: "center",
  },
});
