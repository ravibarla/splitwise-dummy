import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import SettingIcon from "./settingIcon";

const Navbar = ({
  title,
  showCancel,
  showBack,
  showSetting,
  showNext,
  style,
}) => {
  return (
    <View style={[styles.navbar, style]}>
      <View>
        {showCancel && <Text style={{ color: "green" }}>cancel</Text>}
        {showBack && (
          <Text style={{ color: "green" }}>
            <BackButton />
          </Text>
        )}
      </View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        {showNext && <Text>next</Text>}
        {showSetting && <SettingIcon size={30} />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "2%",
    height: 50,
    paddingHorizontal: 15,
  },
});
export default Navbar;
