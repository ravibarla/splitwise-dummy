import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  SearchBar,
  Alert,
} from "react-native";
// import { SafeAreaView } from "react-native-elements";
import React, { useState, useEffect, useContext } from "react";
import User from "../components/User";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import axios from "axios";
import AuthContext from "../context/AuthContext";
export default function UsersList({ navigation }) {
  const [userList, setUserList] = useState([]);
  const [selectedUserList, setSelectedUserList] = useState([]);
  const { user } = useContext(AuthContext);
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

  useEffect(() => {
    getUserList = async () => {
      try {
        const { API_URL } = process.env;
        let url = `${API_URL}/user/getUserList`;
        console.log("user :", user);
        const response = await axios.get(
          // "https://airy-magic-production.up.railway.app/user/getUserList"
          url,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.responseMessage) {
          setUserList(response.data.responseData);
        }
      } catch (error) {
        console.log("error :", error);
      }
    };
    getUserList();
  }, []);

  // Use useEffect to log selectedUserList whenever it updates
  useEffect(() => {
    console.log("selected users :", selectedUserList);
  }, [selectedUserList]);

  // Handler to add/remove a user from the selected list
  const handleUserSelection = (userId) => {
    setSelectedUserList(
      (prevSelected) =>
        prevSelected.includes(userId)
          ? prevSelected.filter((user) => user !== userId) // Remove if already selected
          : [...prevSelected, userId] // Add if not selected
    );
  };
  const handleAddMembers = async () => {
    try {
      const { API_URL } = process.env;
      let url = `${API_URL}/group/addMembers`;
      const response = await axios.post(
        // "https://airy-magic-production.up.railway.app/group/addMembers",
        url,
        {
          groupId: 9,
          membersList: selectedUserList,
        },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("res :", response.data);
      if (response.data.responseMessage === "Success") {
        console.log("res :", response.data);
        Alert.alert("success", response.data.responseData);
      }
    } catch (error) {
      console.log("error :", error);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Navbar
          title={"add group members"}
          showCancel={true}
          showNext={true}
          onNextPress={() => handleAddMembers()}
          navigation={navigation}
        />
        <Search />
        <ScrollView>
          {userList.map((user, index) => (
            <User user={user} key={index} onSelect={handleUserSelection} />
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
