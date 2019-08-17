import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "react-native-ui-kitten";

export const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category="h4">
      Welcome to UI Kitten Quiz Demo App
    </Text>
    <Button style={styles.button}>Enter to the Quiz</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    flex: 1 / 2,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 16
  },
  button: {
    flex: 0
  }
});
