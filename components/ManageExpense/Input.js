import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import { GlobalStyles } from "../../const/Colors";

export default function Input({
  labelText,
  textInputConfig,
  style,
  isInvalid,
}) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        style={[inputStyle, isInvalid && styles.error]}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
    // flexDirection: "row",
    // alignItems: "center",
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    marginBottom: 4,
    marginHorizontal: 4,
    minWidth: 100,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  error: {
    borderColor: "red",
    borderWidth: 2,
  },
});
