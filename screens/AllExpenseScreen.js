import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";

export default function AllExpenseScreen() {
  return <ExpenseOutput expensePeriod={"Total"} />;
}

const styles = StyleSheet.create({});
