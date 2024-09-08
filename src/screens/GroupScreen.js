import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import BackButton from "../components/BackButton";
export default function GroupScreen() {
  return (
    <View>
      <View style={styles.background}>
        <View style={{ paddingTop: 25 }}>
          <BackButton />
        </View>
      </View>
      <View style={styles.groupView}>
        <View style={styles.icon}>
          <Text>Icon</Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 5 }}
          >
            GroupName
          </Text>
        </View>
        <TouchableOpacity style={{ height: 50, alignItems: "flex-start" }}>
          <Button size="sm" title="Add members" />
        </TouchableOpacity>

        <View style={styles.expense}>
          <Text style={{ fontSize: 15, fontWeight: "light" }}>
            No expense here yet
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal={true} // Enable horizontal scrolling
        contentContainerStyle={styles.buttonsContainer} // Add this for styling
        showsHorizontalScrollIndicator={false} // Optional: hides scroll indicator>
      >
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
        <Text style={styles.buttonSpace}>Navbar</Text>
      </ScrollView>
      <View style={{ paddingHorizontal: "10%", marginHorizontal: "20%" }}>
        <Text>you're the only one here</Text>
        <Button
          size="lg"
          title="Add memebers"
          buttonStyle={{ borderRadius: "0%" }}
        />
        <Text>or</Text>
        <Button size="lg" title="Share Link" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "30%",
    backgroundColor: "cyan",
  },
  groupView: {
    marginLeft: 70,
    paddingHorizontal: 20,
    height: "40%",
    backgroundColor: "brown",
    width: "50%",
  },
  icon: {
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: "50%",
  },
  groupTitle: {
    marginTop: 100,
    paddingHorizontal: "10%",
  },
  expense: {
    marginTop: 10,
    paddingHorizontal: "10%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonSpace: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderColor: "gray",
    backgroundColor: "lightgray",
    height: 25,
    borderRadius: 30,
  },
});
