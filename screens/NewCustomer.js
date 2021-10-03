import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { v4 as uuid } from "uuid";
import { FaRegImage } from "react-icons/fa";
// import { AddNewProduct } from "../redux/actions/authActions";
// import { connect } from "react-redux";

class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phoneNumber: "",
      dateOfBirth: "",
      typeOfWork: "",
      houseNumber: "",
      //   image: client,
      imageTofirestore: { name: "noImage.png" },
    };
    this.fullName = this.fullName.bind(this);
    this.phoneNumber = this.phoneNumber.bind(this);
    this.dateOfBirth = this.dateOfBirth.bind(this);
    this.typeOfWork = this.typeOfWork.bind(this);
    this.houseNumber = this.houseNumber.bind(this);
    this.img = this.img.bind(this);
  }

  fullName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  phoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  dateOfBirth(e) {
    this.setState({
      dateOfBirth: e.target.value,
    });
  }

  houseNumber(e) {
    this.setState({
      houseNumber: e.target.value,
    });
  }

  typeOfWork(e) {
    this.setState({
      typeOfWork: e.target.value,
    });
  }
  img(e) {
    this.setState({
      img: e.target.value,
    });
  }

  // componentDidUpdate() {
  //   // console.log(this.state);
  // }

  handleOnSubmit = () => {
    const data = this.state;

    this.props.transactions(data);

    //this.props.addTransaction(data)
  };

  imageHandler = (e) => {
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     this.setState({ profileImg: reader.result });
    //   }
    // };
    // reader.readAsDataURL(e.target.files[0]);
    if (this.state.imageTofirestore === null) {
      alert(" you must choose an image");
    } else {
      if (e.target.files[0]) {
        this.setState({
          image: URL.createObjectURL(e.target.files[0]),
          imageTofirestore: e.target.files[0],
        });
      }
    }
    console.log(e.target.files[0]);
  };

  render() {
    const handleAddPClient = (e) => {
      e.preventDefault();
      let fullName = this.state.fullName;
      let phoneNumber = this.state.phoneNumber;
      let dateOfBirth = this.state.dateOfBirth;
      let typeOfWork = this.state.typeOfWork;
      let houseNumber = this.state.houseNumber;
      var Id = uuid();

      var image = this.state.imageTofirestore;
      console.log(image);

      this.props.AddNewClient(
        Id,
        fullName,
        phoneNumber,
        dateOfBirth,
        typeOfWork,
        houseNumber,
        image
      );
    };

    // const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.detailsContainer}>
          <View style={styles.buyingContainer}>
            <Text style={styles.buyingText}>Full Name</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Full Name"
              name="fullName"
              value={this.state.fullName}
              onChange={(event) => {
                this.setState({ fullName: event.target.value });
              }}
            />
          </View>

          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>Phone number</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Phone Number"
              name="phoneNumber"
              keyboardType="numeric"
              value={this.state.phoneNumber}
              onChange={(event) => {
                this.setState({ phoneNumber: event.target.value });
              }}
            />
          </View>

          <View style={styles.buyingContainer}>
            <Text style={styles.buyingText}>Date of Birth</Text>

            <DatePicker
              style={{ width: 330, borderRadius: 20 }}
              date={this.state.dateOfBirth}
              mode="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
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
                  height: 50,
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
              onChange={(event) => {
                this.setState({ dateOfBirth: event.target.value });
              }}
            />
            {/*<TextInput
              style={styles.inputText}
              placeholder="Date of Birth"
              value={this.state.itemName}
              onChangeText={(itemName) => {
                this.setState({ itemName });
              }}
            />*/}
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Type of Work</Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <TextInput
                style={styles.inputTest}
                placeholder="Type of Work"
                name="typeOfWork"
                value={this.state.typeOfWork}
                onChange={(event) => {
                  this.setState({ typeOfWork: event.target.value });
                }}
              />
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>House Number</Text>

            <TextInput
              style={styles.inputTest}
              placeholder="House Number"
              name="houseNumber"
              value={this.state.houseNumber}
              onChange={(event) => {
                this.setState({ houseNumber: event.target.value });
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.handleImg();
              }}
            >
              <View
                style={{
                  alignItems: "flex-start",
                  marginTop: -5,
                  marginLeft: 15,
                }}
              >
                <Icon name="account-edit" color="purple" size={30} />
              </View>
              <Text style={{ color: "purple" }}>Upload Image</Text>
            </TouchableOpacity>
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

  buyingContainer: {
    // marginLeft: 30,
    paddingBottom: 10,
  },

  buyingText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  inputText: {
    backgroundColor: "#fff",
    height: 50,
    width: 330,
    borderRadius: 20,
    fontSize: 15,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  priceContainer: {
    // marginLeft: 30,
    paddingBottom: 20,
  },

  priceText: {
    fontSize: 20,
    paddingBottom: 15,
  },

  currencyContainer: {
    flexDirection: "row",
  },

  currency: {
    fontSize: 18,
    paddingTop: 8,
  },

  inputTest: {
    backgroundColor: "#fff",
    height: 50,
    width: 330,
    borderRadius: 20,
    flexDirection: "row",
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  numberContainer: {
    //marginLeft: 30,
    paddingBottom: 20,
  },

  numberText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  descriptionContainer: {
    //marginLeft: 30,
    paddingBottom: 15,
  },

  descriptionText: {
    fontSize: 20,
    paddingBottom: 10,
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
    marginTop: 15,
  },

  opacity: {
    backgroundColor: "#06C8F4",
    width: 150,
    height: 50,
    borderRadius: 30,
  },

  buttonTextStyle: {
    color: "blue",
    fontSize: 15,
  },

  continueText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 13,
    fontWeight: "bold",
  },
});

// const mapStateToProps = (state) => {
//   return {
//     state,
//   };
// };

// const mapDispatchToProps = () => {
//   return {
//     AddNewProduct,
//   };
// };

export default NewCustomer;
