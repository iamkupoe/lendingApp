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
import FontAwesome from "react-native-vector-icons/FontAwesome";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirm: "",
    };
  }

  render() {
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
                  <Text style={styles.text_header}>Reset Password</Text>
                </View>
                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Password
                </Text>

                <View style={styles.action}>
                  <FontAwesome name="lock" color="#fff" size={20} />
                  <TextInput
                    placeholder="Please Enter New Password "
                    placeholderTextColor="#fff"
                    value={this.state.password}
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("password", text);
                    }}
                  />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Confirm Password
                </Text>

                <View style={styles.action}>
                  <FontAwesome name="lock" color="#fff" size={20} />
                  <TextInput
                    placeholder="Please Confirm Password "
                    placeholderTextColor="#fff"
                    value={this.state.confirm}
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("confirm", text);
                    }}
                  />
                </View>
                <View style={styles.button}>
                  <LinearGradient
                    colors={["#0CF4ED", "#0CF4ED"]}
                    style={styles.signIn}
                  >
                    <TouchableOpacity onPress={this.handleOnSubmit}>
                      <Text style={[styles.textSign, { color: "#000" }]}>
                        Submit
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                <View style={styles.resetAccountContainer}>
                  <Text style={styles.resetAccount}>Reset Complete! </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("LogInScreen");
                    }}
                    style={styles.createAccountOpacity}
                  >
                    <Text style={styles.reset}>Login</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.policy}></Text>
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
    height: 350,
    width: 320,
    alignSelf: "center",
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    //paddingBottom: 20,
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
    marginTop: 20,
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
    color: "#fff",
    justifyContent: "center",
  },

  reset: {
    color: "#F9F871",
    fontSize: 16,
    paddingTop: 19,
    justifyContent: "center",
  },
});

export default ResetPassword;
