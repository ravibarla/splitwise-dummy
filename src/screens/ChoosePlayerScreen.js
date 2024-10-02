import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import User from "../components/User";

const ChoosePlayerScreen = ({ radio }) => {
  let obj = [
    "John",
    "Jane",
    "Alice",
    "Bob",
    "Michael",
    "Sarah",
    "James",
    "Emily",
    "David",
    "Jessica",
    "Chris",
    "Emma",
    "Daniel",
    "Olivia",
    "Matthew",
    "Sophia",
    "Andrew",
    "Mia",
    "Jacob",
    "Ella",
    "John",
    "Jane",
    "Alice",
    "Bob",
    "Michael",
    "Sarah",
    "James",
    "Emily",
    "David",
    "Jessica",
    "Chris",
    "Emma",
    "Daniel",
    "Olivia",
    "Matthew",
    "Sophia",
    "Andrew",
    "Mia",
    "Jacob",
    "Ella",
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Navbar showCancel={true} title={"choose a payer"} />
        </View>
        <View style={{ paddingHorizontal: "5%" }}>
          <ScrollView>
            {obj.map((ele, index) => (
              <User key={index} userName={ele} radio={true} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "5%",
  },
});

export default ChoosePlayerScreen;
