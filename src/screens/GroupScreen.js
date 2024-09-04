import { View, Text, StyleSheet } from "react-native";
import React from "react";
export default function GroupScreen() {
  return (
    <View>
      <View style={styles.background}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 100,
    backgroundColor: "cyan",
  },
});
