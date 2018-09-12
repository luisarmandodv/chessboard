import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import Box from "./Box";

export default class Table extends Component {
  constructor() {
    super();
  }

  render() {
    let rowsArr = [];
    let boxClass;
    let count = 1;
    let flag = false;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (flag) {
          boxClass = count % 2 === 1 ? styles.blackSquare : styles.whiteSquare;
        } else {
          boxClass = count % 2 === 1 ? styles.whiteSquare : styles.blackSquare;
        }
        rowsArr.push(
          <Box
            boxClass={boxClass}
            row={i}
            column={j}
            selectBox={this.props.selectBox}
            key={`box-${i}-${j}`}
          />
        );
        count++;
      }
      flag = !flag;
    }

    return <View style={styles.chessboard}>{rowsArr}</View>;
  }
}

const styles = StyleSheet.create({
  chessboard: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 40
  },
  blackSquare: {
    backgroundColor: "#000000",
    height: Dimensions.get("window").width / 8,
    width: Dimensions.get("window").width / 8
  },
  whiteSquare: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").width / 8,
    width: Dimensions.get("window").width / 8
  }
});
