import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import SettingIcon from "./settingIcon";
import CrossIcon from "./CrossIcon";

const Navbar = ({
  title,
  showCancel,
  showBack,
  showSetting,
  showNext,
  showDone,
  style,
  showSave,
  showCross,
  onNextPress,
  addMembers,
  navigation,
  iconColor,
}) => {
  return (
    <View style={[styles.navbar, style]}>
      <View>
        {showCancel && (
          <Text style={{ color: "green" }} onPress={() => navigation.goBack()}>
            cancel
          </Text>
        )}
        {showCross && <CrossIcon style={{ size: 20 }} />}
        {showBack && (
          <Text style={{ color: "green" }} onPress={() => navigation.goBack()}>
            <BackButton iconColor={iconColor} />
          </Text>
        )}
      </View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        {showNext && (
          <Text style={{ color: "green" }} onPress={onNextPress}>
            next
          </Text>
        )}
        {showSave && <Text style={{ color: "green" }}>save</Text>}
        {showSetting && <SettingIcon size={30} iconColor={iconColor} />}
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
