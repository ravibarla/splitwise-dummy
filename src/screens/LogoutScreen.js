import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const LogoutScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const handleLogout = async() => {
    await logout();
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => handleLogout()} title="Logout" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LogoutScreen;
