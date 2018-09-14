import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

export default class Box extends Component {
  render() {
    return (
      <TouchableOpacity
        size={8}
        style={this.props.boxClass}
        onPress={() =>
          this.props.selectBox(
            this.props.row,
            this.props.column,
            this.props.number,
            this.props.color
          )
        }
      >
        <Text style={this.props.textStyle}>{this.props.number}</Text>
        <Text
          style={[
            this.props.textStyle,
            { alignSelf: "flex-end", marginTop: 10 }
          ]}
        >{`${this.props.row} - ${this.props.column}`}</Text>
      </TouchableOpacity>
    );
  }
}
