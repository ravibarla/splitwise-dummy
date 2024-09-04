import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function GroupScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={{ uri: "back_arrow_icon_url" }} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.time}>12:34</Text>
        <View style={styles.rightIcons}>
          <Text style={styles.network}>5G</Text>
          <Text style={styles.battery}>63%</Text>
        </View>
      </View>

      <View style={styles.groupHeader}>
        <Image source={{ uri: "group_icon_url" }} style={styles.groupIcon} />
        <Text style={styles.groupName}>Bsnsn</Text>
        <Text style={styles.noExpenses}>No expenses here yet.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Settle up" onPress={() => {}} />
        <Button title="Charts" onPress={() => {}} />
        <Button title="Balances" onPress={() => {}} />
        <Button title="Totals" onPress={() => {}} />
      </View>

      <Text style={styles.onlyOneHere}>You’re the only one here!</Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>+ Add members</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.buttonText}>Share a link</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.activeTab}>Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  time: {
    fontSize: 18,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  network: {
    marginRight: 10,
  },
  battery: {},
  groupHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  groupIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  groupName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  noExpenses: {
    fontSize: 16,
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  onlyOneHere: {
    textAlign: "center",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  shareButton: {
    backgroundColor: "#008CBA",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  activeTab: {
    fontWeight: "bold",
  },
});
