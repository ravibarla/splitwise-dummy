import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import React from "react";

export default function LoaderScreen() {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="#03f5fd" />
      <Text style={styles.loadingText}>Loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20, // Space between spinner and text
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});
