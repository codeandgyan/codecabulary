import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import CodecabularyTabs from "./components/CodecabularyTabs";
import { globalStyles } from "./shared/globalStyles";
import ArticleContextProvider from "./context/ArticleContextProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Constants from "expo-constants";

const queryClient = new QueryClient();
function App() {
  return (
    <View
      style={{
        ...styles.container,
        // backgroundColor: "#5D5D5D",
        backgroundColor: globalStyles.color1,
      }}
    >
      <SafeAreaView
        style={{
          ...styles.innerContainer,
          marginTop: StatusBar.currentHeight ?? Constants.statusBarHeight,
        }}
      >
        <CodecabularyTabs />
      </SafeAreaView>
    </View>
  );
}

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleContextProvider>
        <App />
      </ArticleContextProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
