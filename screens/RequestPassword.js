import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";

class RequestReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  render() {
    const { navigation, auth } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />

          <ImageBackground
            source={require("../assets/images/office2.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.footer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/*{auth.error.register && (
                  <Text style={{ color: "red" }}>{auth.error.register}</Text>
                )}*/}
                <View style={styles.header}>
                  <Text style={styles.text_header}>Request Password Reset</Text>
                </View>

                <View style={styles.action}>
                  <Feather name="mail" color="#fff" size={20} />
                  <TextInput
                    placeholder="Please Enter Registered Email "
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    value={this.state.email}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("email", text);
                    }}
                  />
                </View>

                <View style={styles.button}>
                  <LinearGradient
                    colors={["#0CF4ED", "#0CF4ED"]}
                    style={styles.signIn}
                  >
                    <TouchableOpacity onPress={this.handleOnSubmit}>
                      <Text
                        onPress={() => {
                          navigation.navigate("RequestReset");
                        }}
                        style={[styles.textSign, { color: "#fff" }]}
                      >
                        Reset
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f59153",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  footer: {
    backgroundColor: "#2A272A",
    opacity: 0.6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 15,
    height: 250,
    width: 320,
    alignSelf: "center",
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 20,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 15,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 3,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#fff",
    textAlign: "center",
  },

  policy: {
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 35,
  },
  signIn: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resetAccountContainer: {
    flexDirection: "row",
    //flex: 1,
    paddingBottom: 15,
  },

  resetAccount: {
    marginLeft: 70,
    fontSize: 15,
    paddingTop: 19,
    justifyContent: "center",
  },

  reset: {
    color: "#f5050d",
    fontSize: 16,
    paddingTop: 19,
    justifyContent: "center",
  },
});

export default RequestReset;
