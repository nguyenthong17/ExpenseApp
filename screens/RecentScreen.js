import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";

export default function RecentScreen() {
  return <ExpenseOutput expensePeriod={"Last 7 days"} />;
}

const styles = StyleSheet.create({});
