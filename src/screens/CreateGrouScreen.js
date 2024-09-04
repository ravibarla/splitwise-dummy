import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CameraButton from "../components/CameraButton";
import HomeIcon from "../components/HomeIcon";

export default function CreateGroupScreen({ navigation }) {
  const [groupName, setGroupName] = useState("");
  const handleGroupInput = () => {
    if (groupName.length == 0) {
      Alert.alert("Error", "Group name cannot be empty");
    } else if (groupName.trim().length == 0) {
      Alert.alert("Error", "Group name cannot be empty");
    }
    console.log("groupName :", groupName);
    // try {
    //   const response = await axios.post("http://localhost:500", {
    //     groupName,
    //   });
    //   if (response.status === 200) {
    //     Alert.alert("Success", "Successfully Logged In");
    //   }
    // } catch {
    //   Alert.alert("Error", "An error occurred. Please try again later.");
    //   console.error(error);
    // }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => alert("back")}>
          <Text style={{ color: "#0fa376", fontWeight: "bold", fontSize: 14 }}>
            Cancel
          </Text>
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Create A Group</Text>
        <Pressable onPress={() => handleGroupInput()}>
          <Text style={{ color: "#0fa376", fontWeight: "bold", fontSize: 14 }}>
            Done
          </Text>
        </Pressable>
      </View>
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
          style={{ flexDirection: "column", width: "70%", paddingLeft: "10%" }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    marginTop:20
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
