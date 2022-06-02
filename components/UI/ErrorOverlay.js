import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../const/Colors";

export default function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>An error has occured!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
