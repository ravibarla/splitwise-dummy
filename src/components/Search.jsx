import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import SearchIcon from "./SearchIcon";

const Search = ({ createButton, backgroundColor, handleCreateGroup }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "lightgray",
        backgroundColor: backgroundColor || "lightgray",
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <SearchIcon
        size={20}
        style={{
          alignItems: "center",
          backgroundColor: backgroundColor || "lightgray",
        }}
      />
      {createButton ? (
        <Pressable
          style={styles.createButton}
          onPress={() => handleCreateGroup()}
        >
          <Text style={{ color: "green" }}>{createButton.title}</Text>
        </Pressable>
      ) : (
        <TextInput style={styles.input} placeholder="search ..." />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  createButton: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
});
export default Search;
