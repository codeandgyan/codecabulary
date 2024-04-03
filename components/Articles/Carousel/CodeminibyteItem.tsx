import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../../../shared/globalStyles";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  itemText: string;
  screenSize: { width: number; height: number };
};

const CodeminibyteItem = ({ itemText, screenSize }: Props) => {
  return (
    <View
      style={{
        ...styles.body,
        width: screenSize.width,
      }}
    >
      <View
        style={{
          ...styles.content,
          borderColor: globalStyles.colorYellowShade,
        }}
      >
        <View style={styles.item}>
          <Text
            style={{
              ...styles.itemText,
              color: globalStyles.colorYellowShade,
            }}
          >
            {itemText}
          </Text>
        </View>
      </View>
      <FontAwesome
        name="book"
        size={36}
        color={globalStyles.colorYellowShade}
        style={styles.bookIcon}
      />
    </View>
  );
};

export default CodeminibyteItem;

const styles = StyleSheet.create({
  body: {
    position: "relative",
    paddingHorizontal: 12,
    flex: 1,
  },
  bookIcon: {
    position: "absolute",
    alignSelf: "center",
    margin: 4,
    zIndex: 100,
  },
  content: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: `${globalStyles.color1}`,
    marginVertical: 20,
    justifyContent: "center",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    flexShrink: 1,
    marginHorizontal: 4,
  },
});
