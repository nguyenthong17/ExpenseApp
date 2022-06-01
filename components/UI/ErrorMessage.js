import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../const/Colors";

export default function ErrorMessage({ children }) {
  return (
    <View style={styles.textContainter}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.error50,
    fontSize: 14,
  },
  textContainter: {
    marginVertical: 12,
  },
});
