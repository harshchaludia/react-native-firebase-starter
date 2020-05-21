import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { themeColors } from "../core/themeColors";

const InputElement = ({ errorText, ...props }) => (
  <View style={styles.containerStyle}>
    <Input
      style={styles.inputStyle}
      selectionColor={themeColors.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.errorStyle}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
    marginVertical: 12
  },
  inputStyle: {
    backgroundColor: themeColors.colors.surface,
    borderRadius:15
  },
  errorStyle: {
    fontSize: 14,
    color: themeColors.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4
  }
});

export default memo(InputElement);
