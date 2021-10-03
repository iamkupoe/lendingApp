import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoanForm from "./screens/LoanForm";
import LoginScreen from "./screens/LoginScreen";
import NewCustomer from "./screens/NewCustomer";
import RegisterScreen from "./screens/RegisterScreen";
import RequestReset from "./screens/RequestPassword";
import ResetPassword from "./screens/ResetPassword";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<StartScreen />*/}
      {/*<RegisterScreen />*/}
      {/*<LoginScreen />*/}
      {/*<RequestReset />*/}
      {/*<ResetPassword/>*/}
      {/*<HomeScreen />*/}
      {/*<LoanForm />*/}
      <NewCustomer />
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
