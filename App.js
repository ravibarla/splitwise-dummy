import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text>
      <StatusBar style="auto" /> */}
      {/* <RegistrationScreen /> */}
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
