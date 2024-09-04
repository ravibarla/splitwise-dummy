import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Pressable,
} from "react-native";
import BackButton from "../components/BackButton";
const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    if (username.trim().length == 0) {
      alert("please enter the username");
    } else if (email.trim().length == 0) {
      alert("please enter the email");
    } else if (mobile.trim().length == 0) {
      alert("please enter the email");
    } else if (password.trim().length == 0) {
      alert("please enter the password");
    }

    // Regex pattern to validate email and pasword format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mobileRegex = /^\d{10}$/; // Exactly 10 digits
    const usernameRegex = /^.{10}$/; // Exactly 10 characters

    // input form validation
    if (username.length > 10) {
      Alert.alert("Error", "username length should not be greater than 10");
    } else if (!emailRegex.test(email)) {
      Alert.alert("Error", "incorrect email format abc@domain.com ");
    } else if (!mobileRegex.test(mobile)) {
      Alert.alert(
        "Error",
        "Only numbers are allowed in mobile and should be of length 10"
      );
    } else if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
      );
    }

    console.log("username :", username);
    console.log("email :", email);
    console.log("mobile :", mobile);
    console.log("password :", password);

    // try {
    //   const response = await axios.post("http://localhost:500", {
    //     username,
    //     email,
    //     mobile,
    //     password,
    //   });
    //   if (response.status == 200) {
    //     Alert.alert("Success", "Successfully Registered ");
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
        <Text style={styles.welcomeText}>Register</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="username"
        keyboardType="default"
        autoCapitalize="none"
        value={username}
        onChangeText={(e) => setUsername(e)}
      />
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
        placeholder="mobile"
        keyboardType="phone-pad"
        autoCapitalize="none"
        value={mobile}
        onChangeText={(e) => setMobile(e)}
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
        <Text style={styles.text}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    height: "100%",
    width: "100%",
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

export default RegistrationScreen;
