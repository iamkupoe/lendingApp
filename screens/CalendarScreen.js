import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "09-08-2021" };
  }

  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2015"
        maxDate="01-01-2050"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 50,
            top: 4,
            marginLeft: 15,
          },
          dateInput: {
            marginLeft: 100,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          this.setState({ date: date });
        }}
      />
    );
  }
}

export default CalendarScreen;
