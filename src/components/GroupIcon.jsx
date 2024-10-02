import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const GroupIcon = ({ color, size, style,iconColor }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Icon name="list" size={size || 30} color={color || "#464d48"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default GroupIcon;
