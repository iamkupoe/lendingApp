import React, { Component } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { connect } from "react-redux";
// import { logout } from "../redux/actions/authActions";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
    };
  }

  //   componentDidMount() {
  //     const getCustomer = async () => {
  //       const db = firebase.firestore();
  //       const detailRef = db.collection("customers");
  //       const details = await detailRef.get();
  //       // console.log("transanctions", transactions);

  //       details.forEach((doc) => {
  //         this.setState({ customer: [...this.state.customer, doc.data()] });
  //       });
  //     };
  //     getCustomer();
  //   }

  handleOnSubmit = () => {
    const myCustomShare = async () => {
      const shareOptions = {
        message:
          "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
        url: files.appLogo,
        // urls: [files.image1, files.image2]
      };

      try {
        const ShareResponse = await Share.open(shareOptions);
        console.log(JSON.stringify(ShareResponse));
      } catch (error) {
        console.log("Error => ", error);
      }
    };

    this.props.logout();
  };

  render() {
    // const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditProfileScreen");
          }}
        >
          <View
            style={{ alignItems: "flex-end", marginTop: 50, marginEnd: 15 }}
          >
            <Icon name="account-edit" color="#000" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX1P01Sd9GmmBcwwObUfbLOsFd8-vkDyEZYfcVrqV9_VeoSASUV9wGi4A0CSGqhiZRWI&usqp=CAU",
              }}
              size={80}
            />
            <View style={{ marginLeft: 50 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                {this.props.name}Deo Volente
              </Title>
              <Caption style={styles.caption}>@deovolente</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="phone" color="#007FF3" size={20} />
            <Text style={{ color: "#007FF3", marginLeft: 20, fontSize: 16 }}>
              {this.props.number}0556477313
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#007FF3" size={20} />
            <Text style={{ color: "#007FF3", marginLeft: 20, fontSize: 16 }}>
              Koforidua, Ghana
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name="email" color="#007FF3" size={20} />
            <Text style={{ color: "#007FF3", marginLeft: 20, fontSize: 16 }}>
              {this.props.email}deovolente@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Ionicons name="settings-outline" color="#EF0D32" size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={this.handleOnSubmit}>
            <View style={styles.menuItem}>
              <Ionicons name="log-out" color="#EF0D32" size={25} />
              <Text style={styles.menuItemText}>Log Out</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    color: "#007FF3",
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },

  menuWrapper: {
    marginTop: 5,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  menuItemText: {
    color: "#EF0D32",
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
  },
});

// const mapStateToProps = (state) => {
//   return {
//     auth: state,
//   };
// };

// const mapDispatchToProps = () => {
//   return {
//     // getSummary,
//     // addTransactions,
//   };
// };

export default ProfileScreen;
