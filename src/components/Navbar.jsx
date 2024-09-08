import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <View>
        <Text style={{ color: "green" }}>cancel</Text>
      </View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>next</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "2%",
  },
});
export default Navbar;
