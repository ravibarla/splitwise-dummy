import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  // Alert
} from "react-native";
const RegistrationScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    // if (username.trim().length == 0) {
    //   alert("please enter the username");
    // } else if (email.trim().length == 0) {
    //   alert("please enter the email");
    // } else if (mobile.trim().length == 0) {
    //   alert("please enter the email");
    // } else if (password.trim().length == 0) {
    //   alert("please enter the password");
    // }
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
    //     Alert.alert("Success", "Successfully Logged In");
    //   }
    // } catch {
    //   Alert.alert("Error", "An error occurred. Please try again later.");
    //   console.error(error);
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Splitwise!</Text>
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
      <Button title="Register" color="#841584" onPress={() => handleRegister()} />
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
});

export default RegistrationScreen;
