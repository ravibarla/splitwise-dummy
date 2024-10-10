import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserIcon from "./UserIcon";
import { CheckBox } from "react-native-elements";

export default function User({ user, onSelect, isChecked, isExisting }) {
  // Function to handle checkbox press
  const handleCheckboxPress = () => {
    onSelect(user.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <UserIcon size={20} />
      </View>
      <View style={styles.user}>
        <Text>{user.userName}</Text>
      </View>
      <View style={styles.checkbox}>
        <CheckBox
          checked={isChecked} // Check if user is selected
          onPress={handleCheckboxPress}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 100,
  },
  icon: {
    flex: 1,
    height: "100%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
  },
  checkbox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
