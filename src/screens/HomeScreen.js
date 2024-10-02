import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-elements";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/AuthContext";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  console.log("homescreen");
  const { user } = useContext(AuthContext);
  console.log("user :", user);
  if (user) {
    console.log("user already exist");
    navigation.navigate("Welcome")
    return null;
  }
  return (
    // <View style={styles.container}>

    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderColor: "black",
          height: "30%",
          width: "50%",
          marginBottom: 8,
        }}
      >
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://cdn.dribbble.com/users/345082/screenshots/1189591/splitwiselogo-01.png",
              height: "100%",
              width: "100%",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 8 }}>
        <Button title="login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={{ marginVertical: 4 }}>
        <Button
          title="Register"
          buttonStyle={{ backgroundColor: "#0fa376" }}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={{ alignSelf: "center", marginTop: 20, fontSize: 10 }}>
        <Text>Terms | Privacy Policy | Contact us</Text>
      </View>
    </SafeAreaView>

    // </View>
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
