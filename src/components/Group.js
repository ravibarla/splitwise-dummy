import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import UserIcon from "./UserIcon";
import GroupIcon from "./GroupIcon";

const Group = ({
  groupImg,
  groupName,
  groupId,
  navigation,
  handleGoupSelection,
  route,
}) => {
  console.log("group screen ");

  return (
    <Pressable
      style={styles.container1}
      onPress={() => handleGoupSelection(groupId, groupName)}
    >
      <View style={styles.icon}>
        <GroupIcon
          style={{ borderWidth: 1, borderRadius: 15,backgroundColor:"#0b5345" }}
          color={"white"}
        />
      </View>
      <View style={styles.groupName}>
        <Text>{groupName}</Text>
      </View>
      <View style={styles.owes}>
        <Text>123</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    marginVertical: 5,
    height: 100,
  },
  icon: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  groupName: {
    flex: 3,
    // backgroundColor: "pink",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  owes: {
    flex: 1,
    // backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Group;
