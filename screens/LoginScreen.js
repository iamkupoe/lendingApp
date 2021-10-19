import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { connect } from "react-redux";
// import { loginEmailAccount } from "../redux/actions/authActions";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: "eye",
      eye: "eye-Off",
      email: "",
      password: "",
      showPassword: true,
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  changePasswordType = () => {
    let newState;
    if (this.state.showPassword) {
      newState = {
        eye: "show",
        showPassword: false,
        password: this.state.password,
      };
    } else {
      newState = {
        eye: "eye-Off",
        showPassword: true,
        password: this.state.password,
      };
    }
    this.setState(newState);
  };

  handleOnSubmit = () => {
    this.props.loginEmailAccount(this.state.email, this.state.password);
  };

  render() {
    const { navigation, auth } = this.props;
    return (
      <ImageBackground
        source={require("../assets/images/office.jpg")}
        style={{ width: "100%", height: "100%" }}
        style={styles.Container}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.loginCard}>
          <View style={styles.LoginHeaderContainer}>
            <Text style={styles.loginHeaderText}>Log in</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.action}>
              <Feather
                name="mail"
                color="#fff"
                size={20}
                style={{ paddingTop: 14 }}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(text) => {
                  this.handleUpdateState("email", text);
                }}
                style={styles.textInput}
                autoCapitalize="none"
              />

              <Feather
                name="check-circle"
                color="#fff"
                size={20}
                style={{ paddingTop: 14 }}
              />
            </View>

            <View style={styles.action}>
              <FontAwesome
                name="lock"
                color="#fff"
                size={27}
                style={{ paddingTop: 14 }}
              />
              <TextInput
                placeholder="Password"
                value={this.state.password}
                onChangeText={(text) => {
                  this.handleUpdateState("password", text);
                }}
                secureTextEntry={this.state.showPassword}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(text) => {
                  this.handleUpdateState("password", text);
                }}
              />
              <TouchableOpacity onPress={this.changePasswordType}>
                <Feather
                  name="eye"
                  color="#fff"
                  size={20}
                  style={{ paddingTop: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.opacityContainer}>
            <TouchableOpacity
              onPress={this.handleOnSubmit}
              style={styles.logInOpacity}
            >
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.firstTimeContainer}>
            <Text style={styles.firstTimeText}>First time here?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignupScreen");
              }}
            >
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resetAccountContainer}>
            <Text style={styles.resetAccount}>Forgot password? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RequestReset");
              }}
              style={styles.createAccountOpacity}
            >
              <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: "#2986DD",
    justifyContent: "space-around",
    paddingLeft: 15,
  },
  loginCard: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    width: 330,
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // marginVertical: 50,
  },

  loginHeaderContainer: {
    // flex: 0.2,
  },
  loginHeaderText: {
    color: "#BEFBFF",
    fontSize: 40,
    paddingLeft: 30,
    paddingVertical: 15,
  },
  inputContainer: {
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  opacityContainer: {
    // flex: 0.01,
  },
  textInput: {
    backgroundColor: "#fff",
    height: 50,
    width: 250,
    borderRadius: 8,
    fontSize: 15,
    paddingLeft: 15,
    borderColor: "black",
    borderWidth: 0.8,
  },
  logInOpacity: {
    width: 250,
    height: 50,
    backgroundColor: "#0CF4ED",
    marginHorizontal: 15,
    borderRadius: 5,
    marginVertical: 35,
    alignSelf: "center",
  },
  loginText: {
    color: "#141717",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },

  firstTimeContainer: {
    // flex: 0.3,
    flexDirection: "row",
    alignSelf: "center",
  },
  firstTimeText: {
    color: "#fff",
    fontSize: 15,
  },
  signupText: {
    color: "#46EF0D",
    fontSize: 15,
    paddingLeft: 5,
  },
  resetAccountContainer: {
    flexDirection: "row",
    //flex: 1,
    paddingBottom: 15,
  },

  resetAccount: {
    marginLeft: 90,
    fontSize: 15,
    color: "#fff",
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

// const mapStateToProps = (state) => {
//   return {
//     auth: state,
//   };
// };

export default LoginScreen;
