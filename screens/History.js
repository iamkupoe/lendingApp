import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidUpdate() {
  //   // console.log(this.state);
  // }

  // handleOnSubmit = () => {
  //   const data = this.state;

  //   this.props.transactions(data);

  //   //this.props.addTransaction(data);

  //   this.props.navigation.navigate("Summary");
  // };

  render() {
    //console.log(this.props.transact);
    return (
      <ScrollView>
        <View style={styles.historyContainer}>
          <View style={styles.detailContainer}>
            <View style={styles.opacity}>
              <View style={styles.textContainer}>
                <Text style={styles.historyText}> Kwame Asare </Text>
                <Text style={styles.historyText}> GHC2,000.00 </Text>
                <Text style={styles.historyText}> 11/07/2021 </Text>
                <Text style={styles.historyText}> GHC150.00 </Text>
                <Text style={styles.historyText}> 18/07/2021 </Text>
                <Text style={styles.historyText}> GHC200.00 </Text>
                <Text style={styles.historyText}> 20% </Text>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}> 11 July,2021,11:40AM </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    //justifyContent: "center",
    padding: 15,
    // backgroundColor: "#DFE7E7",
  },

  detailContainer: {
    // marginLeft: 30,
    paddingBottom: 20,
  },
  textContainer: {
    // alignItems: "flex-start",
  },
  historyText: {
    fontSize: 15,
  },
  dateContainer: {
    justifyContent: "center",
  },
  dateText: {
    marginLeft: 100,
    fontSize: 15,
  },
  opacity: {
    backgroundColor: "#fff",
    elevation: 2,
    height: 170,
    width: 320,
    borderRadius: 10,
    padding: 10,

    flexDirection: "row",
    marginLeft: 8,
    marginTop: 30,
  },
});

export default History;
