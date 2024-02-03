import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: globalStyles.textColor }}>HomeScreen</Text>
      <Text style={{ color: globalStyles.textColor }}>HomeScreen</Text>
      <Text style={{ color: globalStyles.textColor }}>HomeScreen</Text>
      <Text style={{ color: globalStyles.textColor }}>HomeScreen</Text>
      <Text style={{ color: globalStyles.textColor }}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 2,
  },
});
