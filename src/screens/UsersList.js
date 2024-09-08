import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import User from "../components/User";

export default function UsersList() {
  let obj = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.container}>
      {obj.map((ele) => (
        <User userName={ele} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
