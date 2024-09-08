import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  SafeAreaView,
} from "react-native";
import BackButton from "../components/BackButton";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (userName.trim().length == 0) {
      Alert.alert("Error", "please enter the email");
    } else if (password.trim().length == 0) {
      Alert.alert("Error", "please enter the password");
    }

    let API_LOGIN_URL =
      "https://airy-magic-production.up.railway.app/user/login";
    try {
      const response = await axios.get(API_LOGIN_URL, {
        userName,
        password,
      });
      if (response.status === 200) {
        Alert.alert("Success", "Successfully Logged In");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView >
        <View>
          <BackButton style={{ marginBottom: 20 }} />
          <Text style={styles.welcomeText}>Log in</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="username"
          keyboardType="default"
          autoCapitalize="none"
          value={userName}
          onChangeText={(e) => setUserName(e)}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          autoCapitalize="none"
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry
        />

        <Pressable style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ marginTop: "5%" }}
        >
          <Text>forgot password ?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: "10%",
    padding: "5%",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#0fa376",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LoginScreen;
