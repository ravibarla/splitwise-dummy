import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SearchIcon = ({ color = "#464d48", size, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Icon name="search-outline" color={color} size={size || 30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // height: 100,
  },
});

export default SearchIcon;
