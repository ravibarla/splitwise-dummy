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
} from "react-native";
import BackButton from "../components/BackButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email.trim().length == 0) {
      Alert.alert("Error", "please enter the email");
    } else if (password.trim().length == 0) {
      Alert.alert("Error", "please enter the password");
    }
    // Regex pattern to validate email and pasword format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      Alert.alert("Error", "incorrect email format abc@domain.com ");
    } else if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
      );
    }

    console.log("email :", email);
    console.log("password :", password);

    // try {
    //   const response = await axios.post("http://localhost:500", {
    //     email,
    //     password,
    //   });
    //   if (response.status === 200) {
    //     Alert.alert("Success", "Successfully Logged In");
    //   }
    // } catch {
    //   Alert.alert("Error", "An error occurred. Please try again later.");
    //   console.error(error);
    // }
  };

  return (
    <View style={styles.container}>
      <View>
        <BackButton style={{ marginBottom: 20 }} />
        <Text style={styles.welcomeText}>Log in</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        value={password}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ marginTop: "5%" }}
      >
        <Text>forgot password ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
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
