import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonts}>Welcome To Splitwise</Text>
      <Text style={styles.usernameFont}>Username !</Text>
      <Text
        style={{
          marginTop: "20%",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: "lighter",
        }}
      >
        Splitwise keeps track of balanace between freinds
      </Text>
      <TouchableOpacity>
        <Image source={require("../../assets/splitwiselogo-01.png")} />
      </TouchableOpacity>
      <Pressable style={styles.button}>
        <Text style={{ color: "#0fa376", fontWeight: "bold", fontSize: 20 }}>
          next
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  fonts: {
    fontSize: 24,
    fontWeight: "bold",
  },
  usernameFont: {
    fontSize: 15,
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
});
export default WelcomeScreen;
