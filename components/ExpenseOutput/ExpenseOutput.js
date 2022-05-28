import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const someData = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-05-01"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 159.99,
    date: new Date("2022-05-02"),
  },
];

export default function ExpenseOutput({ expenses, expensePeriod }) {
  return (
    <View>
      <ExpenseSummary expenses={someData} />
      <ExpenseList expenses={someData} />
    </View>
  );
}

const styles = StyleSheet.create({});
