import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import User from "../components/User";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { getFullPath, API_PATH } from "../config/api";

export default function UsersList({ navigation, route }) {
  const [userList, setUserList] = useState([]);
  const [selectedUserList, setSelectedUserList] = useState(new Set());
  const [existingUserList, setExistingUserList] = useState(new Set());
  const { user } = useContext(AuthContext);
  const { groupId } = route.params;

  useEffect(() => {
    const getExistingUserList = async () => {
      try {
        const response1 = await axios.get(
          getFullPath(API_PATH.getUserByGroup(groupId)),
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response1.data.responseMessage === "Success") {
          const existingUsers = response1.data.responseData.map(user => user.id);
          setExistingUserList(new Set(existingUsers)); // Set for efficient lookup
          setSelectedUserList(prev => new Set([...prev, ...existingUsers])); // Pre-select existing members
        }
      } catch (error) {
        console.log("error :", error);
      }
    };

    const getAllUsers = async () => {
      try {
        const response1 = await axios.get(getFullPath(API_PATH.getUserList), {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        });
        if (response1.data.responseMessage === "Success") {
          setUserList(response1.data.responseData);
        }
      } catch (err) {
        console.log("error :", err);
      }
    };

    getExistingUserList();
    getAllUsers();
  }, []);

  const handleUserSelection = (userId) => {
    setSelectedUserList(prevSelected => {
      const updatedSelection = new Set(prevSelected);
      if (updatedSelection.has(userId)) {
        updatedSelection.delete(userId); // Uncheck if already selected
      } else {
        updatedSelection.add(userId); // Check if not selected
      }
      return updatedSelection;
    });
  };

  const handleAddMembers = async () => {
    try {
      const { API_URL } = process.env;
      const url = `${API_URL}/group/addMembers`;
      const response = await axios.post(
        url,
        {
          groupId,
          membersList: Array.from(selectedUserList), // Convert Set to Array
        },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.responseMessage === "Success") {
        Alert.alert("Success", response.data.responseData);
      }
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Navbar
          title={"Add Group Members"}
          showCancel={true}
          showNext={true}
          onNextPress={handleAddMembers}
          navigation={navigation}
        />
        <Search />
        <ScrollView>
          {userList.map((user) => (
            <User
              user={user}
              key={user.id}
              onSelect={handleUserSelection}
              isChecked={selectedUserList.has(user.id)} // Check if user is selected
              isExisting={existingUserList.has(user.id)} // Check if user is an existing member
            />
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
