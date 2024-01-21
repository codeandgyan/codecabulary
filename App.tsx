import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import CodecabularyTabs from "./components/CodecabularyTabs";
import { globalStyles } from "./shared/globalStyles";
import ArticleContextProvider from "./context/ArticleContextProvider";

function App() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: globalStyles.primaryBackgroundColor,
      }}
    >
      <SafeAreaView style={styles.innerContainer}>
        <CodecabularyTabs />
      </SafeAreaView>
    </View>
  );
}

export default () => {
  return (
    <ArticleContextProvider>
      <App />
    </ArticleContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
