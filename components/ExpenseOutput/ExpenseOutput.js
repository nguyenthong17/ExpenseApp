import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../const/Colors";

export default function ExpenseOutput({
  expenses,
  expensePeriod,
  fallbackText,
}) {
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }

  return (
    <View style={styles.screenContainer}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallbackText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
});
