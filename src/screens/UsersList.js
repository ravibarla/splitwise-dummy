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
import React, { useState, useEffect } from "react";
import User from "../components/User";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import axios from "axios";
export default function UsersList() {
  const [userList, setUserList] = useState([]);
  const [selectedUserList, setSelectedUserList] = useState([]);
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
        const response = await axios.get(
          "https://airy-magic-production.up.railway.app/user/getUserList"
        );

        if (response.data) {
          // console.log("response :", response.data);
          setUserList(response.data);
          // console.log("userList :", userList);
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
      const url = process.env.API_URL;
      const response = await axios.post(
        "https://airy-magic-production.up.railway.app/group/addMembers",
        {
          groupId: 2,
          membersList: selectedUserList,
        }
      );
     
      if(response.data="Members added successfully!!!!!"){
        console.log("res :", response.data);
        
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
