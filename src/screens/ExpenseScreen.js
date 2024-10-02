import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GroupIcon from "../components/GroupIcon";
import CustomButton from "../components/CustomButton";
import RupeeIcon from "../components/RupeeIcon";

const ExpenseScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar showSave={true} showCross={true} title={"Add An Expense"} />

      <View
        style={{
          borderBottomWidth: 2,
          borderColor: "gray",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Text>with you and :</Text>
        </View>
        <View style={{ flex: 4, flexDirection: "row" }}>
          <View
            style={{
              marginTop: 2,
              borderColor: "black",
              backgroundColor: "white",
              borderBottomWidth: 3,
              borderWidth: 1,
              height: 50,
              borderRadius: 10,
            }}
          >
            <GroupIcon />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ alignSelf: "center" }}>group name</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            width: "70%",
            padding: "5%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: "5%",
            }}
          >
            <View
              style={{
                borderBottomWidth: 4,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            >
              <GroupIcon size={15} />
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "green",
                width: "70%",
                marginHorizontal: 20,
              }}
            >
              <TextInput placeholder="Enter a description" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: "5%",
            }}
          >
            <View
              style={{
                borderBottomWidth: 4,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            >
              <RupeeIcon />
            </View>

            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "green",
                width: "70%",
                marginHorizontal: 20,
              }}
            >
              <TextInput placeholder="0.00" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingVertical: "5%",
            }}
          >
            <Text>Paid By</Text>

            <CustomButton title="you" style={{ backgroundColor: "white" }} />
            <Text>and split</Text>

            <CustomButton title="spli" style={{ backgroundColor: "white" }} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "5%",
  },
});

export default ExpenseScreen;
