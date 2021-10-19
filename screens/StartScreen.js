import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

class StartScreen extends Component {
  render() {
    const { navigation, auth } = this.props;
    return (
      <ImageBackground
        source={require("../assets/images/office1.jpg")}
        style={{ width: "100%", height: "100%" }}
        style={styles.mainContainer}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#06C8F4" />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Keep Records and Customer Database
          </Text>
        </View>

        <View style={styles.opacityContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
            style={styles.logInOpacity}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
            style={styles.signupOpacity}
          >
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Get started by Logging in or Signing up
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  headerContainer: {
    flex: 2,
  },
  headerText: {
    color: "red",
    paddingVertical: 60,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  opacityContainer: {
    flex: 0.5,
    flexDirection: "row",
    // marginTop: 80,
  },
  logInOpacity: {
    width: 150,
    height: 50,
    backgroundColor: "#08f8ff",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  loginText: {
    color: "#003133",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  signupOpacity: {
    width: 150,
    height: 50,
    backgroundColor: "#08f8ff",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  signupText: {
    color: "#003133",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  getStartedContainer: {
    flex: 1,
  },
  getStartedText: {
    color: "#95efff",
    textAlign: "center",
    fontSize: 20,
  },
});

export default StartScreen;
