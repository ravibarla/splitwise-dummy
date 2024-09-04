import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import SearchIcon from "../components/SearchIcon";
import Group from "../components/Group";

const GroupListScreen = () => {
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
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.left}>
          <SearchIcon />
        </View>
        <View style={styles.right}>
          <Text>Create group</Text>
        </View>
      </View>
      <View>
        <Text>overall</Text>
      </View>

      <ScrollView>
        {arr.map((ele) => (
          <Group groupName={ele} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:"10%",
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
});

export default GroupListScreen;
