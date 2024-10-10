import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AddButtonIcon = ({ color = "#464d48", size = 30, style,navigation }) => {
 

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigation.navigate("Expense")}
    >
      <Icon name="add-outline" size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AddButtonIcon;
