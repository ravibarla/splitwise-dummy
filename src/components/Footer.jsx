import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PersonIcon from "./PersonIcon";
import PeoplesIcon from "./PeoplesIcon";
import AddButtonIcon from "./AddButton";
import ActivityIcon from "./ActivityIcon";
import AcountIcon from "./AccountIcon";

const Footer = ({ isPeopleEnable }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.freinds}>
        <PersonIcon />
      </View>
      <View style={styles.groups} isPeopleEnable={isPeopleEnable}>
        <PeoplesIcon />
      </View>
      <View style={styles.addExpense}>
        <AddButtonIcon />
      </View>
      <View style={styles.addExpense}>
        <ActivityIcon />
      </View>
      <View style={styles.account}>
        <AcountIcon />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  freinds: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  groups: {
    borderColor: "green",
    borderTopWidth: 3,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addExpense: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  account: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Footer;
