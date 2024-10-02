import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const UserIcon = ({ color = "#464d48", size, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.container]}>
      <Icon name="person-outline" size={size || 30} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "grey",
  },
});

export default UserIcon;
