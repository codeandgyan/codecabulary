import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  color: string;
  width?: number;
};

const HorizontalLine = ({ color, width }: Props) => {
  return (
    <View
      style={[
        {
          borderBottomColor: color,
          borderBottomWidth: width ?? StyleSheet.hairlineWidth,
        },
      ]}
    />
  );
};

export default HorizontalLine;
