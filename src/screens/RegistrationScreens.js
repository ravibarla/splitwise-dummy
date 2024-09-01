import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
const RegistrationScreens = () => {
  const [username, setUsername] = useState("username");
  const [email, setEmail] = useState("email");
  const [mobile, setMobile] = useState("mobile");
  const [password, setPassword] = useState("password");
  const handleLogin =  () => {
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
      <Text style={styles.welcomeText}>Welcome back to Splitwise!</Text>
      <TextInput
        style={styles.input}
        placeholder={username}
        keyboardType="default"
        autoCapitalize="none"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        style={styles.input}
        placeholder={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        style={styles.input}
        placeholder={mobile}
        keyboardType="phone-pad"
        autoCapitalize="none"
        onChange={(e) => setMobile(e.target.value)}
      />

      <TextInput
        style={styles.input}
        placeholder={password}
        autoCapitalize="none"
        onChange={(e) => setPassword(e.target.value)}
        secureTextEntry
      />
      <Button
        title="Login"
        color="#841584"
        onPress={() => handleLogin()}
      />
      <TouchableOpacity >
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
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

export default RegistrationScreens;
