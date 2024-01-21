import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ ...styles, color: globalStyles.textColor }}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
