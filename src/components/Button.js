import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { themeColors } from "../core/themeColors";

const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === "outlined" && { backgroundColor: themeColors.colors.surface },
      style
    ]}
    labelStyle={[
      styles.text,
      mode === "contained" && { color: themeColors.colors.surface }
    ]}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26
  }
});

export default memo(Button);
