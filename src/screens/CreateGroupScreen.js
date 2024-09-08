import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CreateGroupScreen = () => {
  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Create a group</Text>
        <TouchableOpacity>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.imageContainer}>
          <Icon name="camera" size={30} color="#aaa" />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Group name" />
      </View>

      <Text style={styles.typeLabel}>Type</Text>

      <View style={styles.typeContainer}>
        <TouchableOpacity style={styles.typeButton}>
          <Icon name="plane" size={20} color="#000" />
          <Text style={styles.typeText}>Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.typeButton}>
          <Icon name="home" size={20} color="#000" />
          <Text style={styles.typeText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.typeButton}>
          <Icon name="heart" size={20} color="#000" />
          <Text style={styles.typeText}>Couple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
   
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cancel: {
    fontSize: 16,
    color: "green",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  done: {
    fontSize: 16,
    color: "green",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
  },
  typeLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  typeButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  typeText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CreateGroupScreen;
