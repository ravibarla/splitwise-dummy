import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
//   Button,
  TouchableOpacity,
  Alert,
} from "react-native";
const LoginScreen = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
//   const handleLogin = () => {
    // if (email.trim().length == 0) {
      //   alert("please enter the email");
      // }  else if (password.trim().length == 0) {
      //   alert("please enter the password");
      // }

    //   console.log("email :", email);

    //   console.log("password :", password);

      // try {
      //   const response = await axios.post("http://localhost:500", {

      //     email,

      //     password,
      //   });
      //   if (response.status == 200) {
      //     Alert.alert("Success", "Successfully Logged In");
      //   }
      // } catch {
      //   Alert.alert("Error", "An error occurred. Please try again later.");
      //   console.error(error);
      // }
    // }

    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome back to Splitwise!</Text>
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
        {/* <Button title="Login" color="#841584" onPress={() => handleLogin()} /> */}
        <TouchableOpacity onPress={alert("pressed")}>
          <Text>forgot password ?</Text>
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

export default LoginScreen;
