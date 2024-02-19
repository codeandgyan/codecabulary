import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: globalStyles.textColor }}>HomeScreen</Text>
      <Ionicons name="logo-javascript" size={60} color="#FFDE59" />
      <Fontisto name="nodejs" size={60} color="green" />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
