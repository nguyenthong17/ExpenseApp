import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../const/Colors";

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
  {
    id: "e3",
    description: "A pair of T-Shirt",
    amount: 19.99,
    date: new Date("2022-03-02"),
  },
  {
    id: "e4",
    description: "Books",
    amount: 70.0,
    date: new Date("2022-01-02"),
  },
  {
    id: "e5",
    description: "Gloves",
    amount: 129.99,
    date: new Date("2022-04-22"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-05-01"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 159.99,
    date: new Date("2022-05-02"),
  },
  {
    id: "e8",
    description: "A pair of T-Shirt",
    amount: 19.99,
    date: new Date("2022-03-02"),
  },
  {
    id: "e9",
    description: "Books",
    amount: 70.0,
    date: new Date("2022-01-02"),
  },
  {
    id: "e10",
    description: "Gloves",
    amount: 129.99,
    date: new Date("2022-04-22"),
  },
];

export default function ExpenseOutput({ expenses, expensePeriod }) {
  return (
    <View style={styles.screenContainer}>
      <ExpenseSummary expenses={someData} periodName={expensePeriod} />
      <ExpenseList expenses={someData} />
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
});
