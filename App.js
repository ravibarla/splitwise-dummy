import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreens from "./src/screens/RegistrationScreens";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text>
      <StatusBar style="auto" /> */}
      <RegistrationScreens />
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
