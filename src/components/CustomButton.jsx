import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({ title }) => {
  return (
    <View style={styles.optionButton}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "lightgray",
    borderColor: "gray",
    borderWidth: 0.5,
    borderBottomWidth: 2.5,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default CustomButton;
