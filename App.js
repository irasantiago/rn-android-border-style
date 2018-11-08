import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Text style={styles.allBordersSolid}>
            {`Text element
borderStyle: "solid"`}
          </Text>
          <View style={styles.allBordersSolid}>
            <Text>{`View element
borderStyle: "solid"`}</Text>
          </View>
          <Text style={styles.allBordersWithBorderRadiusSolid}>
            <Text>{`Text element
borderStyle: "solid"
borderRadius: 0.1`}</Text>
          </Text>
          <View style={styles.allBordersWithBorderRadiusSolid}>
            <Text>{`View element
borderStyle: "solid"
borderRadius: 0.1`}</Text>
          </View>
          <Text style={styles.bottomBorderSolid}>
            {`Text element
borderStyle: "solid"`}
          </Text>
          <View style={styles.bottomBorderSolid}>
            <Text>{`View element
borderStyle: "solid"`}</Text>
          </View>
          <Text style={styles.bottomBorderWithRadiusSolid}>
            {`Text element
borderStyle: "solid"
borderRadius: 0.1`}
          </Text>
          <View style={styles.bottomBorderWithRadiusSolid}>
            <Text>{`View element
borderStyle: "solid"
borderRadius: 0.1`}</Text>
          </View>
          <Text style={styles.allBordersDotted}>
            {`Text element
borderStyle: "dotted"`}
          </Text>
          <View style={styles.allBordersDotted}>
            <Text>{`View element
borderStyle: "dotted"`}</Text>
          </View>
          <Text style={styles.allBordersWithBorderRadiusDotted}>
            <Text>{`Text element
borderStyle: "dotted"
borderRadius: 0.1`}</Text>
          </Text>
          <View style={styles.allBordersWithBorderRadiusDotted}>
            <Text>{`View element
borderStyle: "dotted"
borderRadius: 0.1`}</Text>
          </View>
          <Text style={styles.bottomBorderDotted}>
            {`Text element
borderStyle: "dotted"`}
          </Text>
          <View style={styles.bottomBorderDotted}>
            <Text>
              {`View element
borderStyle: "dotted"`}
            </Text>
          </View>
          <Text style={styles.bottomBorderWithRadiusDotted}>
            {`Text element
borderStyle: "dotted"
borderRadius: 0.1`}
          </Text>
          <View style={styles.bottomBorderWithRadiusDotted}>
            <Text>{`View element
borderStyle: "dotted"
borderRadius: 0.1`}</Text>
          </View>
          <Text style={styles.allBordersDashed}>
            {`Text element
borderStyle: "dashed"`}
          </Text>
          <View style={styles.allBordersDashed}>
            <Text>{`View element
borderStyle: "dashed"`}</Text>
          </View>
          <Text style={styles.allBordersWithBorderRadiusDashed}>
            <Text>{`Text element
borderStyle: "dashed"
borderRadius: 0.1`}</Text>
          </Text>
          <View style={styles.allBordersWithBorderRadiusDashed}>
            <Text>{`View element
borderStyle: "dashed"
borderRadius: 0.1`}</Text>
          </View>
          <Text style={styles.bottomBorderDashed}>
            {`Text element
borderStyle: "dashed"`}
          </Text>
          <View style={styles.bottomBorderDashed}>
            <Text>{`View element
borderStyle: "dashed"`}</Text>
          </View>
          <Text style={styles.bottomBorderWithRadiusDashed}>
            {`Text element
borderStyle: "dashed"
borderRadius: 0.1`}
          </Text>
          <View style={styles.bottomBorderWithRadiusDashed}>
            <Text>{`View element
borderStyle: "dashed"
borderRadius: 0.1`}</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 30
  },
  allBordersDotted: {
    borderStyle: "dotted",
    borderWidth: 2,
    margin: 10,
    padding: 10
  },
  allBordersWithBorderRadiusDotted: {
    borderRadius: 0.1,
    borderStyle: "dotted",
    borderWidth: 2,
    margin: 10,
    padding: 10
  },
  bottomBorderDotted: {
    borderBottomWidth: 2,
    borderStyle: "dotted",
    flexGrow: 0,
    margin: 10,
    padding: 10
  },
  bottomBorderWithRadiusDotted: {
    borderBottomWidth: 2,
    borderRadius: 0.1,
    borderStyle: "dotted",
    margin: 10,
    padding: 10
  },
  allBordersDashed: {
    borderWidth: 2,
    borderStyle: "dashed",
    margin: 10,
    padding: 10
  },
  allBordersWithBorderRadiusDashed: {
    borderRadius: 0.1,
    borderStyle: "dashed",
    borderWidth: 2,
    margin: 10,
    padding: 10
  },
  bottomBorderDashed: {
    borderBottomWidth: 2,
    borderStyle: "dashed",
    margin: 10,
    padding: 10
  },
  bottomBorderWithRadiusDashed: {
    borderBottomWidth: 2,
    borderRadius: 0.1,
    borderStyle: "dashed",
    margin: 10,
    padding: 10
  },
  allBordersSolid: {
    borderWidth: 2,
    borderStyle: "solid",
    margin: 10,
    padding: 10
  },
  allBordersWithBorderRadiusSolid: {
    borderRadius: 0.1,
    borderStyle: "solid",
    borderWidth: 2,
    margin: 10,
    padding: 10
  },
  bottomBorderSolid: {
    borderBottomWidth: 2,
    borderStyle: "solid",
    margin: 10,
    padding: 10
  },
  bottomBorderWithRadiusSolid: {
    borderBottomWidth: 2,
    borderRadius: 0.1,
    borderStyle: "solid",
    margin: 10,
    padding: 10
  }
});
