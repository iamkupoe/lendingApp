import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

class StartScreen extends Component {
  render() {
    const { navigation, auth } = this.props;
    return (
      <ImageBackground
        source={require("../assets/images/start.jpg")}
        style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
        style={styles.mainContainer}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.headerContainer}>
          <Image
            style={{
              height: 120,
              width: 120,
              alignSelf: "center",
              marginTop: 60,
            }}
            source={require("../assets/images/Deo.png")}
          />
          <Text style={styles.headerText}>Deo Volente</Text>
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
          <Text style={styles.getStartedText}>Get started</Text>
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
    color: "purple",
    fontSize: 35,
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
    backgroundColor: "purple",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  signupOpacity: {
    width: 150,
    height: 50,
    backgroundColor: "purple",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  signupText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  getStartedContainer: {
    flex: 1,
  },
  getStartedText: {
    color: "#bd03d3",
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 20,
  },
});

export default StartScreen;
