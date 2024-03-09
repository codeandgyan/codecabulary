import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../shared/globalStyles";
import HorizontalLine from "./HorizontalLine";
import LogoImg from "../assets/codecabulary-white-transparent.png";
import * as TOPICS from "../assets/ExploreTopics.json";

type ExploreTopic = {
  topic: string;
  definition: string;
  logo: string;
};

const Explore = () => {
  console.log(TOPICS.data);
  return (
    <View style={styles.exploreContainer}>
      <View style={styles.concept}>
        <Text style={{ ...styles.conceptText, color: globalStyles.textColor }}>
          Topics to explore
        </Text>
        <Image source={LogoImg} style={styles.logoImage} />
      </View>
      <HorizontalLine color={globalStyles.textColor} width={2} />

      <View style={{ paddingVertical: 12 }}>
        <FlatList
          scrollEnabled
          data={TOPICS.data as ExploreTopic[]}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 8,
                flex: 1,
              }}
            >
              <View
                style={{
                  gap: 8,
                  width: "30%",
                  //   height: "100%",
                  paddingVertical: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  //   borderColor: "yellow",
                  //   borderWidth: 1,
                }}
              >
                <Image
                  source={{ uri: item.logo }}
                  style={{ width: 60, height: 60, resizeMode: "contain" }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    color: globalStyles.textColor,
                  }}
                >
                  {item.topic}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  //   borderColor: "lightblue",
                  //   borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    color: globalStyles.textColorSecondary,
                  }}
                >
                  {item.definition}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => (
            <HorizontalLine color={globalStyles.color6} />
          )}
        />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  exploreContainer: {
    // width: "100%",
    flex: 1,
  },
  concept: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  conceptText: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
  },
  logoImage: {
    width: 60,
    height: 60,
  },
});
