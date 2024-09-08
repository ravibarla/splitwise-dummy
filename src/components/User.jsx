import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserIcon from "./UserIcon";
import { CheckBox } from "react-native-elements";

export default function User({ userName }) {
  const [selectedIndex, setIndex] = React.useState(1);
  return (
    <View style={styles.contianer1}>
      <View style={styles.icon}>
        <UserIcon size={20}/>
      </View>
      <View style={styles.user}>
        <Text>{userName}</Text>
      </View>
      <View style={styles.checkbox}>
        <CheckBox
          checked={selectedIndex === 0}
          onPress={() => setIndex(0)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="white"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contianer1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 2,
    height: 100,
  },
  icon: {
    flex: 1,
    // backgroundColor: "cyan",
    height: "100%",
    padding: 5,
    alignItems: "center",
    justifyContent:"center"
    // borderWidth: 2,
  },
  user: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
    // borderWidth: 2,
    // backgroundColor: "yellow",
  },
  checkbox: {
    flex: 1,
    // backgroundColor: "brown",
    // height: "80%",
    alignItems: "center",
    justifyContent:"center"
  },
});
