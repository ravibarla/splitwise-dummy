import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
  // SafeAreaView,
} from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import BackButton from "../components/BackButton";
import GroupProfile from "../components/GroupProfile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import GroupProfileOptionButton from "../components/GroupProfileOptionButton";
import CustomButton from "../components/CustomButton";

export default function GroupScreen() {
  let options = [
    { title: "option 1" },
    { title: "option 2" },
    { title: "option 3" },
    { title: "option 4" },
    { title: "option 4" },
    { title: "option 4" },
    { title: "option 5" },
    { title: "option 6" },
    { title: "option 7" },
    { title: "option 8" },
    { title: "option 9" },
  ];
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navbar showBack={true} showSetting={true} style={styles.navbar} />

          <View style={styles.background}></View>

          <GroupProfile />
          <View
            style={{
              flex: 1,
              borderColor: "black",
              borderWidth: 2,
              flexDirection: "column",
            }}
          >
            <ScrollView
              horizontal={true}
              style={{ flex: 1, paddingVertical: 10 }}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                {options.map((option, index) => (
                  <CustomButton title={option.title} key={index} />
                ))}
              </View>
            </ScrollView>
          </View>
          {/* View that takes up the entire remaining space */}
          <View style={styles.fullSpaceView}>
            <Text style={styles.spaceBetween}>
              you're the only one add membners!
            </Text>

            <Button style={styles.spaceBetween} title={"add member"}  radius={"lg"}/>
            <Text style={styles.spaceBetween}>or</Text>
            <Button style={styles.spaceBetween} title={"add member"} />
          </View>
          <View style={{ flex: 1 }}>
            <Text>footer</Text>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "10%",
    backgroundColor: "cyan",
  },
  navbar: {
    backgroundColor: "cyan",
  },
  fullSpaceView: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "violet",
    borderWidth: 2,
  },
  spaceBetween: {
    paddingVertical: 15,
  },
});
