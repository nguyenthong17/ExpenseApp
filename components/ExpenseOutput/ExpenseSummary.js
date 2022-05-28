import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExpenseSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>ExpenseSummary</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
