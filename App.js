import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Alert
} from "react-native";
import Table from "./src/components/Table";

export default class App extends Component {
  constructor() {
    super();

    this.rows = 8;
    this.columns = 8;

    this.state = {
      table: Array(this.rows)
        .fill()
        .map(() => Array(this.columns).fill(false)),

      startRow: undefined,
      startColumn: undefined,
      endRow: undefined,
      endColumn: undefined,
      colorStart: undefined,
      colorEnd: undefined,
      positionRow: undefined,
      positionColumn: undefined,
      totalSteps: 0
    };

    this.count = 0;
  }

  selectBox = (row, column, number, color) => {
    let copy = this.state.table;

    if (this.count === 0) {
      this.setState({
        table: copy,
        start: number,
        colorStart: color,
        startRow: row,
        startColumn: column
      });
      copy[row][column] = !copy[row][column];
      this.count++;
    } else if (this.count === 1 && this.state.colorStart === color) {
      this.setState({
        table: copy,
        end: number,
        colorEnd: color,
        endRow: row,
        endColumn: column
      });
      copy[row][column] = !copy[row][column];
      this.count++;
    } else if (this.state.colorStart !== color) {
      Alert.alert(
        "Error",
        "Selecciona el mismo color",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  start = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, 300);
  };

  stop = () => {
    clearInterval(this.intervalId);
  };

  restart = () => {
    this.setState({
      table: Array(8)
        .fill()
        .map(() => Array(8).fill(false)),
      startRow: undefined,
      startColumn: undefined,
      endRow: undefined,
      endColumn: undefined,
      colorStart: undefined,
      colorEnd: undefined,
      positionRow: undefined,
      positionColumn: undefined,
      totalSteps: 0
    });
    this.count = 0;
  };

  play = () => {
    let copy = JSON.parse(JSON.stringify(this.state.table)),
      positionRow = this.state.positionRow,
      positionColumn = this.state.positionColumn,
      startRow = this.state.startRow,
      startColumn = this.state.startColumn,
      endRow = this.state.endRow,
      endColumn = this.state.endColumn,
      steps = this.state.totalSteps;

    if (positionRow === undefined && positionColumn === undefined) {
      positionRow = startRow;
      positionColumn = startColumn;
    }

    //Advance to above
    if (positionRow > endRow && positionColumn === endColumn) {
      //por la derecha
      if (positionColumn > 4) {
        if (positionRow - endRow === 2) {
          positionRow--;
          positionColumn--;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencias
        } else if (positionRow - endRow === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow--;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencias
        } else if (positionRow - endRow === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow--;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      } else {
        //2 cuadros diferencias
        if (positionRow - endRow === 2) {
          positionRow--;
          positionColumn++;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencias
        } else if (positionRow - endRow === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow--;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencias
        } else if (positionRow - endRow === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow--;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      }
    }

    //Advance to below
    if (positionRow < endRow && positionColumn === endColumn) {
      //por la derecha
      if (positionColumn > 4) {
        if (endRow - positionRow === 2) {
          positionRow++;
          positionColumn--;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencia
        } else if (endRow - positionRow === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow++;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencia
        } else if (endRow - positionRow === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow++;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      } else {
        //2 cuadros diferencia
        if (endRow - positionRow === 2) {
          positionRow++;
          positionColumn++;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencia
        } else if (endRow - positionRow === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow++;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencia
        } else if (endRow - positionRow === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow++;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      }
    }

    //Advance to the right
    if (positionRow === endRow && positionColumn < endColumn) {
      //por la derecha
      if (positionRow > 4) {
        if (endColumn - positionColumn === 2) {
          positionRow++;
          positionColumn++;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencia
        } else if (endColumn - positionColumn === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow++;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencia
        } else if (endColumn - positionColumn === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow++;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      } else {
        //2 cuadros diferencia
        if (endColumn - positionColumn === 2) {
          positionRow--;
          positionColumn++;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencia
        } else if (endColumn - positionColumn === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow--;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencia
        } else if (endColumn - positionColumn === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow--;
            positionColumn++;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      }
    }

    //Advance to the left
    if (positionRow === endRow && positionColumn > endColumn) {
      //por la derecha
      if (positionRow > 4) {
        if (positionColumn - endColumn === 2) {
          positionRow--;
          positionColumn--;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencia
        } else if (positionColumn - endColumn === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow--;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencia
        } else if (positionColumn - endColumn === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow--;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      } else {
        //2 cuadros diferencia
        if (positionColumn - endColumn === 2) {
          positionRow++;
          positionColumn--;
          copy[positionRow][positionColumn] = true;
          steps++;
          //4 cuadros diferencia
        } else if (positionColumn - endColumn === 4) {
          for (let count = 0; count < 2; count++) {
            positionRow++;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
          //6 cuadros diferencia
        } else if (positionColumn - endColumn === 6) {
          for (let count = 0; count < 3; count++) {
            positionRow++;
            positionColumn--;
            copy[positionRow][positionColumn] = true;
            steps++;
          }
        }
      }
    }

    //Advance NorthWest
    if (positionRow > endRow && positionColumn > endColumn) {
      positionRow--;
      positionColumn--;
      copy[positionRow][positionColumn] = true;
      steps++;
    }

    //Advance NorthEast
    if (positionRow > endRow && positionColumn < endColumn) {
      positionRow--;
      positionColumn++;
      copy[positionRow][positionColumn] = true;
      steps++;
    }

    //Advance SouthWest
    if (positionRow < endRow && positionColumn > endColumn) {
      positionRow++;
      positionColumn--;
      copy[positionRow][positionColumn] = true;
      steps++;
    }

    //Advance SouthEast
    if (positionRow < endRow && positionColumn < endColumn) {
      positionRow++;
      positionColumn++;
      copy[positionRow][positionColumn] = true;
      steps++;
    }

    //Stop game
    if (positionRow === endRow && positionColumn === endColumn) {
      this.stop();
    }

    this.setState({
      table: copy,
      positionRow: positionRow,
      positionColumn: positionColumn,
      totalSteps: steps
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 51.2, height: 51.2 }}
          source={require("./src/images/bishop.png")}
        />
        <Table
          selectBox={this.selectBox}
          table={this.state.table}
          containerStyles={styles.container}
        />
        <Text>{`Steps: ${this.state.totalSteps}`}</Text>
        <View style={styles.footer}>
          <Text style={styles.instructions}>
            Select a starting position and an ending position of a bishop on the
            chessboard and you'll know the number of moves it would take for the
            bishop to get there.
          </Text>
          <View style={styles.buttonsContainer}>
            <Button onPress={this.start} title="Start" />
            <Button onPress={this.stop} title="Stop" />
            <Button onPress={this.restart} title="Restart" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dfe6e9",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50
  },
  footer: {
    backgroundColor: "#ced6e0",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    paddingBottom: 10,
    paddingTop: 20
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  instructions: {
    margin: 20,
    textAlign: "left",
    fontWeight: "100"
  }
});
