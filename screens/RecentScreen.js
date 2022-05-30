import { StyleSheet } from "react-native";
import React, { useContext } from "react";

import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDayMinus } from "../util/date";

export default function RecentScreen() {
  const ExpenseCtx = useContext(ExpenseContext);
  const today = new Date();
  const date7DaysAgo = getDayMinus(today, 7);
  const expenseData = ExpenseCtx.expense.filter((expense) => {
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpenseOutput
      expensePeriod={"Last 7 days"}
      expenses={expenseData}
      fallbackText="There is no expense in the lat 7 days"
    />
  );
}

const styles = StyleSheet.create({});
