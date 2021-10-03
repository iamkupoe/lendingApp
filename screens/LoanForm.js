import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import DatePicker from "react-native-datepicker";

class LoanForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      loanAmount: "",
      loanDate: "",
      repaymentAmount: "",
      repaymentDate: "",
      deposit: "",
      rate: "",
    };
    this.customerName = this.customerName.bind(this);
    this.loanAmount = this.loanAmount.bind(this);
    this.loanDate = this.loanDate.bind(this);
    this.repaymentAmount = this.repaymentAmount.bind(this);
    this.repaymentDate = this.repaymentDate.bind(this);
    this.deposit = this.deposit.bind(this);
    this.rate = this.rate.bind(this);
  }

  customerName(e) {
    this.setState({
      customerName: e.target.value,
    });
  }

  loanAmount(e) {
    this.setState({
      loanAmount: e.target.value,
    });
  }

  loanDate(e) {
    this.setState({
      loanDate: e.target.value,
    });
  }

  repaymentAmount(e) {
    this.setState({
      repaymentAmount: e.target.value,
    });
  }

  repaymentDate(e) {
    this.setState({
      repaymentDate: e.target.value,
    });
  }

  deposit(e) {
    this.setState({
      deposit: e.target.value,
    });
  }
  rate(e) {
    this.setState({
      rate: e.target.value,
    });
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  handleOnSubmit = () => {
    const data = this.state;

    this.props.transactions(data);

    //this.props.addTransaction(data);

    this.props.navigation.navigate("Summary");
  };

  render() {
    //console.log(this.props.transact);
    return (
      <ScrollView>
        <StatusBar translucent backgroundColor="#06C8F4" />
        <View style={styles.detailsContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Name of Customer</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Customer Name"
              value={this.state.customerName}
              onChangeText={(customerName) => {
                this.setState({ customerName });
              }}
            />
          </View>

          <View style={styles.loanContainer}>
            <Text style={styles.loanAmount}>Loan Amount GH{"\u20B5"}</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Loan Amount"
              keyboardType="numeric"
              value={this.state.loanAmount}
              onChangeText={(loanAmount) => {
                this.setState({ loanAmount });
              }}
            />
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.loanDate}>Loan Date</Text>

            <DatePicker
              style={{ width: 330, borderRadius: 20 }}
              date={this.state.loanDate}
              mode="date"
              placeholder="Loan Date"
              format="DD-MM-YYYY"
              minDate="01-01-2015"
              maxDate="01-01-2050"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 30,
                  borderRadius: 20,
                  height: 40,
                  borderColor: "black",
                  borderWidth: 0.8,
                  alignItems: "flex-start",
                  paddingLeft: 8,
                },
                placeholderText: {
                  fontSize: 15,
                  color: "gray",
                },
                dateText: {
                  fontSize: 15,
                  color: "blue",
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(loanDate) => {
                this.setState({ loanDate });
              }}
            />
          </View>

          <View style={styles.repaymentContainer}>
            <Text style={styles.repaymentAmount}>
              Repayment Amount GH{"\u20B5"}
            </Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <TextInput
                style={styles.inputTest}
                placeholder="Repayment Amount"
                keyboardType="numeric"
                value={this.state.repaymentAmount}
                onChangeText={(repaymentAmount) => {
                  this.setState({ repaymentAmount });
                }}
              />
            </View>
          </View>

          <View style={styles.repaymentContainer}>
            <Text style={styles.loanDate}>Repayment Date</Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <DatePicker
                style={{ width: 330, borderRadius: 20 }}
                date={this.state.repaymentDate}
                mode="date"
                placeholder="Repayment Date"
                format="DD-MM-YYYY"
                minDate="01-01-2015"
                maxDate="01-01-2050"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 30,
                    borderRadius: 20,
                    height: 40,
                    borderColor: "black",
                    borderWidth: 0.8,
                    alignItems: "flex-start",
                    paddingLeft: 8,
                  },
                  placeholderText: {
                    fontSize: 15,
                    color: "gray",
                  },
                  dateText: {
                    fontSize: 15,
                    color: "blue",
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(repaymentDate) => {
                  this.setState({ repaymentDate });
                }}
              />
            </View>
          </View>

          <View style={styles.repaymentContainer}>
            <Text style={styles.repaymentAmount}>Deposit GH{"\u20B5"}</Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <TextInput
                style={styles.inputTest}
                placeholder="Deposit"
                keyboardType="numeric"
                value={this.state.deposit}
                onChangeText={(deposit) => {
                  this.setState({ deposit });
                }}
              />
            </View>
          </View>

          <View style={styles.rateContainer}>
            <Text style={styles.rateText}> Loan Rate (%) </Text>

            <TextInput
              style={styles.inputTest}
              placeholder="Loan Rate"
              keyboardType="numeric"
              value={this.state.loanRate}
              onChangeText={(loanRate) => {
                this.setState({ loanRate });
              }}
            />
          </View>

          <View style={styles.opacityContainer}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => {
                this.handleOnSubmit();
              }}
            >
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    //justifyContent: "center",
    padding: 15,
    marginVertical: 35,
    backgroundColor: "#fff",
  },

  nameContainer: {
    // marginLeft: 30,
    paddingBottom: 12,
  },

  nameText: {
    fontSize: 20,
    paddingBottom: 12,
  },

  inputText: {
    backgroundColor: "#fff",
    height: 40,
    width: 330,
    borderRadius: 20,
    fontSize: 15,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  loanContainer: {
    // marginLeft: 30,
    paddingBottom: 12,
  },

  loanDate: {
    fontSize: 18,
    paddingBottom: 12,
  },

  loanAmount: {
    fontSize: 18,
    paddingBottom: 12,
  },

  currencyContainer: {
    flexDirection: "row",
  },

  currency: {
    fontSize: 18,
    paddingTop: 12,
    paddingTop: 8,
  },

  inputTest: {
    backgroundColor: "#fff",
    height: 40,
    width: 330,
    borderRadius: 20,
    flexDirection: "row",
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  loanContainer: {
    //marginLeft: 30,
    paddingBottom: 12,
    paddingTop: 8,
  },

  repaymentAmount: {
    fontSize: 18,
    paddingBottom: 12,
    paddingTop: 8,
  },

  rateContainer: {
    //marginLeft: 30,
    paddingBottom: 12,
    paddingTop: 8,
  },

  rateText: {
    fontSize: 18,
    paddingBottom: 12,
  },

  inputTxt: {
    backgroundColor: "#fff",
    height: 80,
    width: 330,
    borderRadius: 20,
    textAlignVertical: "top",
    paddingTop: 10,
    fontSize: 15,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  opacityContainer: {
    alignSelf: "center",
    marginTop: 25,
  },

  opacity: {
    backgroundColor: "#06C8F4",
    width: 150,
    height: 50,
    borderRadius: 30,
  },

  continueText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 13,
    fontWeight: "bold",
  },
});

export default LoanForm;
