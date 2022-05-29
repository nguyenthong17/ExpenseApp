import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { GlobalStyles } from "../../const/Colors";

export default function ExpenseSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.period}>{periodName || "Period Name"}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 16,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
