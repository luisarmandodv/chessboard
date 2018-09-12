import React, { Component } from "react";
import { View } from "react-native";

export default class Box extends Component {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.column);
  };

  render() {
    return (
      <View size={8} style={this.props.boxClass} onPress={this.selectBox} />
    );
  }
}
