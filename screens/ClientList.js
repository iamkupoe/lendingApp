import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          fullName: "Kwame Asare",
          phoneNumber: "0246727849",
          dateOfBirth: "26/10/1980",
          typeOfWork: "Taxi Driver",
          houseNumber: "A40 Trom",
        },
        {
          fullName: "Diana Asamoah",
          phoneNumber: "0502583132",
          dateOfBirth: "15/07/1989",
          typeOfWork: "Trader",
          houseNumber: "W40 Two Streams",
        },
      ],
    };
  }
  render() {
    return <div></div>;
  }
}

export default ClientList;
