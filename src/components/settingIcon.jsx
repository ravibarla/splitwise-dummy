import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SettingIcon = ({ color = "#464d48", size = 20, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Icon name="settings-outline" size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default SettingIcon;
