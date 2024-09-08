import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function User({ userName }) {
  return (
    <View style={styles.contianer1}>
      <View style={styles.icon}>
        <Text>Icon</Text>
      </View>
      <View style={styles.user}>
        <Text>{userName}</Text>
      </View>
      <View style={styles.checkbox}>
        <Text>checkbox</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contianer1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
    height: "20%",
  },
  icon: {
    flex: 1,
    backgroundColor: "cyan",
    height: "100%",
  },
  user: {
    flex: 2,
    height: "100%",

    backgroundColor: "yellow",
  },
  checkbox: {
    flex: 1,
    backgroundColor: "brown",
    height: "100%",
  },
});
