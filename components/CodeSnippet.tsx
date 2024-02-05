import React from "react";
import { StyleSheet } from "react-native";
import CodeHighlighter from "react-native-code-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { globalStyles } from "../shared/globalStyles";
// import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  snippet: string;
  language: string;
};
export default function CodeSnippet({ snippet, language }: Props) {
  return (
    <CodeHighlighter
      hljsStyle={a11yDark}
      containerStyle={{
        ...styles.codeContainer,
        backgroundColor: globalStyles.color4,
      }}
      textStyle={styles.text}
      language={language}
      wrapLongLines={true}
      wrapLines={true}
      lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
    >
      {snippet}
    </CodeHighlighter>
  );
}

const styles = StyleSheet.create({
  codeContainer: {
    padding: 8,
    height: "auto",
    width: 320,
  },
  text: {
    fontSize: 12,
  },
});
