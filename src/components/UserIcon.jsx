import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const UserIcon = ({ color = "#464d48", size = 30, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigation.goBack()}
    >
      <Icon name="person-outline" size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "grey",
  },
});

export default UserIcon;
