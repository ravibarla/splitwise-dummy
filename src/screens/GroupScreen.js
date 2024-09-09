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

export default function GroupScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navbar showBack={true} showSetting={true} style={styles.navbar} />

          <View style={styles.background}></View>

          <GroupProfile />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "40%",
  },
  background: {
    height: "30%",
    backgroundColor: "cyan",
  },
  navbar: {
    backgroundColor: "cyan",
  },
});
