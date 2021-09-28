import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterScreen from "./screens/RegisterScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<StartScreen />*/}
      <RegisterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
