import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import LoanForm from "./LoanForm";
import NewCustomer from "./NewCustomer";
import Calendar from "./CalendarScreen";
import ClientList from "./ClientList";

class NewTransaction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <View style={styles.first}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate(NewCustomer)}
            >
              <View style={styles.customerContainer}>
                <Feather name="user-plus" color="purple" size={20} />
                <Text style={styles.captionText}>Add Client</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate(LoanForm)}
            >
              <View style={styles.customerContainer}>
                <Feather name="dollar-sign" color="purple" size={20} />
                <Text style={styles.captionText}>New Loan</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.second}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate(Calendar)}
            >
              <View style={styles.customerContainer}>
                <Feather name="calendar" color="purple" size={20} />
                <Text style={styles.captionText}>Calendar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate(ClientList)}
            >
              <View style={styles.customerContainer}>
                <Feather name="book" color="purple" size={20} />
                <Text style={styles.captionText}>Client List</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  first: {
    flexDirection: "row",
  },
  second: {
    flexDirection: "row",
  },
  opacity: {
    backgroundColor: "#fff",
    elevation: 2,
    height: 150,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 50,
  },
  customerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  captionText: {
    fontSize: 18,
    color: "#412728",
  },
});

export default NewTransaction;
