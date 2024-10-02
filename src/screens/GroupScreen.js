import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  // SafeAreaView,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import React from "react";
import BackButton from "../components/BackButton";
import GroupProfile from "../components/GroupProfile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import GroupProfileOptionButton from "../components/GroupProfileOptionButton";
import CustomButton from "../components/CustomButton";
import Expense from "../components/Expense";
import Footer from "../components/Footer";
import { useEffect, useStatate } from "react";
import axios from "axios";
export default function GroupScreen({ navigation, route }) {
  console.log("groupScreen single");
  const { groupName, groupId } = route.params;
  console.log();
  let expenses = [
    { title: "expense1", amount: 100 },
    { title: "expense2", amount: 100 },
    { title: "expense3", amount: 100 },
    { title: "expense4", amount: 100 },

    { title: "expense5", amount: 100 },
    { title: "expense6", amount: 100 },
    { title: "expense7", amount: 100 },
    { title: "expense8", amount: 100 },
  ];
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
  const img = require("../../assets/background1.jpg");
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <LinearGradient
            colors={["#005c97", "#363795"]}
            // colors={["#1fa2ff","#12d8fa", "#a6ffcb"]} // Define your gradient colors
            start={{ x: 0, y: 0 }} // Optional: start of the gradient (top-left corner)
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          >
            <Navbar showBack={true} showSetting={true} iconColor={"white"} />
          </LinearGradient>
          <View style={styles.background}>
            <LinearGradient
              colors={["#005c97", "#363795"]}
              // colors={["#1fa2ff","#12d8fa", "#a6ffcb"]} // Define your gradient colors
              start={{ x: 0, y: 0 }} // Optional: start of the gradient (top-left corner)
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            ></LinearGradient>
          </View>

          <GroupProfile
            groupName={groupName}
            groupId={groupId}
            iconColor={"white"}
            iconBg={"#176B87"}
          />
          <View
            style={{
              flex: 1,
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
          {
            <View style={styles.fullSpaceView}>
              <Text style={styles.spaceBetween}>
                you're the only one add membners!
              </Text>
              <Button
                style={styles.spaceBetween}
                title={"add member"}
                radius={"lg"}
                onPress={() => navigation.navigate("UserList")}
              />
              {/* <Text style={styles.spaceBetween}>or</Text>
              <Button style={styles.spaceBetween} title={"share  member"} /> */}
            </View>

            // <View
            //   style={{
            //     flex: 7,
            //     flexDirection: "column",
            //   }}
            // >
            //   <ScrollView
            //     horizontal={false}
            //     style={{ flex: 1, paddingVertical: 10, width: "100%" }}
            //     showsVerticalScrollIndicator={false}
            //   >
            //     {expenses.map((ele, index) => (
            //       <View
            //         style={{
            //           height: 100,
            //           paddingHorizontal: "5%",
            //         }}
            //         key={index}
            //       >
            //         <Expense
            //           title={ele.title}
            //           amount={ele.amount}
            //           key={index}
            //         />
            //       </View>
            //     ))}
            //   </ScrollView>
            // </View>
          }
          <Footer />
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
    // backgroundColor: "cyan",
  },
  navbar: {},
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
