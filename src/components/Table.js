import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import Box from "./Box";

export default class Table extends Component {
  constructor() {
    super();
  }

  render() {
    let rowsArr = [],
      boxClass,
      count = 1,
      flag = false,
      color = undefined;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.props.table[i][j]) {
          boxClass = styles.pressedBox;
        } else if (flag) {
          if (count % 2 === 1) {
            color = "black";
            boxClass = styles.blackBox;
            textColor = styles.whiteText;
          } else {
            boxClass = styles.whiteBox;
            textColor = styles.blackText;
            color = "white";
          }
        } else {
          if (count % 2 === 1) {
            color = "white";
            boxClass = styles.whiteBox;
            textColor = styles.blackText;
          } else {
            boxClass = styles.blackBox;
            color = "black";
            textColor = styles.whiteText;
          }
        }
        rowsArr.push(
          <Box
            boxClass={[styles.box, boxClass]}
            textStyle={textColor}
            row={i}
            column={j}
            number={count}
            color={color}
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
    marginTop: 2
  },
  blackBox: {
    backgroundColor: "#000000"
  },
  whiteBox: {
    backgroundColor: "#f1f2f6"
  },
  pressedBox: {
    backgroundColor: "#eb4d4b"
  },
  box: {
    height: Dimensions.get("window").width / 8,
    width: Dimensions.get("window").width / 8
  },
  whiteText: {
    color: "#f1f2f6"
  },
  blackText: {
    color: "#000000"
  }
});
