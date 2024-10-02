import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
const GroupSettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ borderWidth: 2, borderColor: "black", width: "100%" }}>
        <Navbar showBack={true} />
      </View>

      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
        }}
      >
        <View style={{ borderColor: "black", borderWidth: 2, flex: 1 }}>
          <Text>Image</Text>
        </View>

        <View style={{ borderColor: "black", borderWidth: 2, flex: 3 }}>
          <Text>GroupName</Text>
        </View>

        <View style={{ borderColor: "black", borderWidth: 2, flex: 1 }}>
          <Text>edit</Text>
        </View>
      </View>
      <View>
        <Text>group members</Text>
        <View style={{ width: "50%", flexDirection: "row" }}>
          <View style={{ borderColor: "black", borderWidth: 2, flex: 1 }}>
            <Text>img</Text>
          </View>
          <View style={{ borderColor: "black", borderWidth: 2, flex: 4 }}>
            <Button
              title="add more members"
              buttonStyle={{ backgroundColor: "#0fa376" }}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "start",
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    paddingTop: "5%",
  },
});
export default GroupSettingsScreen;
