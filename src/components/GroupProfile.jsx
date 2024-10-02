import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import GroupIcon from "./GroupIcon";
import React from "react";

const GroupProfile = ({ groupName, groupId, iconColor, iconBg }) => {
  console.log("group name :", groupName);
  console.log("group id :", groupId);
  return (
    <View style={styles.groupView}>
      <View style={styles.icon}>
        <GroupIcon color={iconColor} />
      </View>
      <View>
        <Text style={styles.groupTitle}>{groupName}</Text>
      </View>

      <View style={styles.expense}>
        <Text style={{ fontSize: 15, fontWeight: "light" }}>
          No expense here yet
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  groupView: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "5%",
    flex: 1,
    position: "relative",
    top: "-6%",
    // left: "7%",
  },
  icon: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "#16325B",
  },
  groupTitle: { fontSize: 20, fontWeight: "bold", paddingVertical: 5 },
  expense: {},
});
export default GroupProfile;
