import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import Group from "../components/Group";
import Search from "../components/Search";
import FilterIcon from "../components/FilterIcon";
import Footer from "../components/Footer";
import AuthContext from "../context/AuthContext";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
const GroupListScreen = ({ navigation }) => {
  const [groupList, setGroupList] = useState([]);
  const { user } = useContext(AuthContext);
  console.log("group list screen");
  console.log("user :", user);
  useEffect(() => {
    const getGroupList = async () => {
      try {
        const { API_URL } = process.env;
        let url = `${API_URL}/users/?userId=${user.id}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        });
        if (response.data.responseMessage == "Success") {
          setGroupList(response.data.responseData);
        }
      } catch (error) {
        console.log("error :", error);
      }
    };
    getGroupList();
  }, []);
  const arr = [
    "group1",
    "group2",
    "group3",
    "group4",
    "group5",
    "group6",
    "group7",
    "group8",
  ];
  const handleCreateGroup = () => {
    navigation.navigate("CreateGrou");
  };
  const handleGoupSelection = (groupId, groupName) => {
    navigation.navigate("Group", {
      groupId,
      groupName,
    });
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.ScrollViewWrapper}>
        <Search
          createButton={{ title: "create-group" }}
          backgroundColor={"white"}
          handleCreateGroup={handleCreateGroup}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ flex: 5 }}>overall</Text>
          <FilterIcon
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          />
        </View>
        <View style={styles.ScrollViewWrapper}>
          <ScrollView>
            {groupList.map((group, index) => (
              <Group
                groupName={group.groupName}
                groupId={group.id}
                key={index}
                handleGoupSelection={handleGoupSelection}
              />
            ))}
          </ScrollView>
        </View>
        <View style={{ height: 60 }}>
          <Footer isPeopleEnable={true} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: "10%",
    paddingTop: "10%",
    paddingHorizontal: "5%",
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensure spacing between the two views
    alignItems: "center", // Vertically center the items
    backgroundColor: "cyan",
    height: "6%",
  },
  left: {
    flex: 1,
    justifyContent: "center", // Center the icon vertically
    alignItems: "flex-start", // Align text to the left
  },
  right: {
    flex: 4,
    alignItems: "flex-end", // Align text to the right
  },
  ScrollViewWrapper: {
    flex: 1,
  },
});

export default GroupListScreen;
