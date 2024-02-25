import {
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Explore from "../components/Explore";

const HomeScreen = () => {
  const { width: windowWidth } = useWindowDimensions();
  const SLIDE_WIDTH = Math.round(windowWidth / 4.5);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ ...styles.container, backgroundColor: globalStyles.color1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        // keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Adjust this value as needed
      >
        <Search />
        <Categories />
        <Explore />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
