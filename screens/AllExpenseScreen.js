import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "../store/expense-context";

export default function AllExpenseScreen() {
  const { expense } = useContext(ExpenseContext);

  return (
    <ExpenseOutput
      expensePeriod={"Total"}
      expenses={expense}
      fallbackText="There is no expense"
    />
  );
}

const styles = StyleSheet.create({});
