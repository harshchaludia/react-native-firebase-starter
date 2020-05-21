import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { themeColors } from "../core/themeColors";

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: themeColors.colors.primary,
    fontWeight: "bold",
    paddingVertical: 14
  }
});

export default memo(Header);
