import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../const/Colors";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
