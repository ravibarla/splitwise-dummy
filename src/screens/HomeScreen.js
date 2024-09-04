import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderColor: "black",
          height: "30%",
          width: "50%",
          marginBottom: "2%",
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
      <View style={{ marginVertical: 4 }}>
        <Button title="login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={{ marginVertical: 4 }}>
        <Button
          title="register"
          color="#0fa376"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={{ alignSelf: "end", marginTop: "5%", fontSize: "10" }}>
        <Text>Terms | Privacy Policy | Contact us</Text>
      </View>
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
