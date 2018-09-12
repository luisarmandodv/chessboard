import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import Table from "./src/components/Table";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      table: Array(8)
        .fill()
        .map(() => Array(8).fill(false))
    };
  }

  selectBox = (row, column) => {
    let copy = this.state.table;
    copy[row][column] = !copy[row][column];
    this.setState({
      table: copy
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Table
          selectBox={this.selectBox}
          table={this.state.table}
          containerStyles={styles.container}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
