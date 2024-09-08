import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  SearchBar,
} from "react-native";
// import { SafeAreaView } from "react-native-elements";
import React from "react";
import User from "../components/User";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export default function UsersList() {
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
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Navbar title={"user-list"} />
        <Search />
        <ScrollView>
          {obj.map((ele, index) => (
            <User userName={ele} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
