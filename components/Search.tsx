import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "../shared/globalStyles";

const Search = () => {
  return (
    <View style={{ ...styles.search, backgroundColor: globalStyles.color4 }}>
      <Feather name="search" size={24} color={globalStyles.textPlaceHolder} />
      <TextInput
        editable
        maxLength={80}
        style={{ ...styles.searchInput, color: globalStyles.textColor }}
        // onChangeText={(text) => onChangeHeadline(text)}
        // value={headLineValue}
        placeholder="Search for Topics"
        placeholderTextColor={globalStyles.textPlaceHolder}
        keyboardAppearance="dark"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 40,
    padding: 8,
    gap: 4,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    fontSize: 16,
  },
});
