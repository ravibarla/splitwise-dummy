import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState, useContext } from "react";
import CameraButton from "../components/CameraButton";
import HomeIcon from "../components/HomeIcon";
import Navbar from "../components/Navbar";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function CreateGroupScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [groupName, setGroupName] = useState("");
  const handleGroupInput = async () => {
    if (groupName.length == 0) {
      Alert.alert("Error", "Group name cannot be empty");
    } else if (groupName.trim().length == 0) {
      Alert.alert("Error", "Group name cannot be empty");
    }
    console.log("groupName :", groupName);
    try {
      const response1 = await axios.post(
        "https://airy-magic-production.up.railway.app/group/create",
        {
          groupName,
        },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("res group creation:", response1.data);
      if (response1.data.responseMessage === "Success") {
        const response2 = await axios.post(
          "https://airy-magic-production.up.railway.app/group/addMembers",
          {
            groupId: response1.data.responseData.id,
            membersList: [user.id],
          },
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response2.data.responseMessage === "Success") {
          console.log(response2.data);
          navigation.navigate("GroupList");
          Alert.alert("Success", "Successfully Added member");
        }
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred. Please try again later.");
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Navbar
          title={"Create A Group"}
          showCancel={true}
          showNext={true}
          onNextPress={handleGroupInput}
          navigation={navigation}
        />
        {/* </View> */}
        <View style={styles.createView}>
          <TouchableOpacity
            style={{
              backgroundColor: "#d2d6d3",
              borderRadius: 15,
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CameraButton />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "column",
              width: "70%",
              paddingLeft: "10%",
            }}
          >
            <Text>Group Name</Text>
            <TouchableOpacity style={{ borderBottomWidth: 0.5 }}>
              <TextInput
                placeholder="enter a group name"
                value={groupName}
                onChangeText={(e) => setGroupName(e)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: "10%" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Type</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <TouchableOpacity style={styles.borderStyle}>
              <Text style={styles.borderText}>Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderStyle}>
              <Text style={styles.borderText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderStyle}>
              <Text style={styles.borderText}>Couple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  createView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 40,
  },
  borderStyle: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#dce6df",
    height: 40,
    width: 70,
  },
  borderText: {
    fontSize: 15,
    fontWeight: "400",
    alignSelf: "center",
    padding: 2,
  },
});
