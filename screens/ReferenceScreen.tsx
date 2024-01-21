import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";

const ReferenceScreen = () => {
  return (
    <View>
      <Text style={{ ...styles, color: globalStyles.textColor }}>
        ReferenceScreen
      </Text>
    </View>
  );
};

export default ReferenceScreen;

const styles = StyleSheet.create({});
