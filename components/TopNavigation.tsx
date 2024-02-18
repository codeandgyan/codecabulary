import { StyleSheet, View, Image } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import CodeLogoImg from "../assets/codecabulary-logo-white.png";
import { globalStyles } from "../shared/globalStyles";

type Props = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

const TopNavigation = ({ index, setIndex }: Props) => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={24} color={globalStyles.textColorSecondary} />
      <Image source={CodeLogoImg} style={{ resizeMode: "contain" }} />
      <MaterialIcons
        name="first-page"
        size={24}
        color={globalStyles.textColorSecondary}
        style={{ transform: [{ rotate: "90deg" }] }}
      />
    </View>
  );

  /* return (
    <View
      style={{
        ...styles.container,
        backgroundColor: globalStyles.color1,
      }}
    >
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{ ...styles.text, color: "lightgrey" }}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color={globalStyles.blueHightlight}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons
            name="arrow-left"
            size={15}
            color={globalStyles.blueHightlight}
          />
          <Text style={{ ...styles.text, color: "lightgrey" }}>Home</Text>
        </TouchableOpacity>
      )}

      <View style={styles.center}>
        <Text style={{ ...styles.textCenter, color: globalStyles.textColor }}>
          {index ? "All Articles" : "Home "}
        </Text>
      </View>
      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesign
              name="reload1"
              size={24}
              color={globalStyles.blueHightlight}
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text style={{ ...styles.text, color: "white" }}>All Articles</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={15}
            color={globalStyles.blueHightlight}
          />
        </TouchableOpacity>
      )}
    </View>
  );*/
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 40,
    padding: 10,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 10,
//     alignItems: "center",
//     borderBottomColor: "black",
//     borderBottomWidth: 0.5,
//   },
//   left: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: 90,
//     // justifyContent: "space-between",
//   },
//   right: {
//     width: 90,
//     alignItems: "flex-end",
//   },
//   center: {
//     paddingBottom: 6,
//     borderBottomWidth: 5,
//     borderBottomColor: globalStyles.blueHightlight,
//     borderRadius: 10,
//   },
//   textCenter: {
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   text: {
//     fontSize: 16,
//   },
// });
