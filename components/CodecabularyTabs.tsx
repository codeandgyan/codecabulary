import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import TopNavigation from "./TopNavigation";
import ReferenceScreen from "../screens/ReferenceScreen";

const CodecabularyTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(1);

  const [routes] = useState([
    { key: "first", title: "Home" },
    { key: "second", title: "All Articles" },
    { key: "third", title: "Reference" },
  ]);

  const renderScene = SceneMap({
    first: HomeScreen,
    second: ArticleScreen,
    third: ReferenceScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default CodecabularyTabs;

const styles = StyleSheet.create({});
