import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GroupIcon from "./GroupIcon";

const Expense = ({ title, amount }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View style={styles.logo}>
        <View style={styles.logoBorder}>
          <GroupIcon />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    flex: 1,
    paddingVertical: "2%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logoBorder: {
    borderColor: "black",
    borderWidth: 2,
  },
  title: {
    flex: 4,
    paddingHorizontal: "5%",
  },
  amount: {
    flex: 1,

    paddingHorizontal: "5%",
  },
});
export default Expense;
