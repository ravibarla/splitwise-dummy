import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const FilterIcon = ({ color = "#464d48", size = 20, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigation.goBack()}
    >
      <Icon name="filter" size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "0%",
  },
});

export default FilterIcon;
