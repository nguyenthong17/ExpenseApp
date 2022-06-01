import { StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";

import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDayMinus } from "../util/date";
import { getExpenses } from "../util/http";

export default function RecentScreen() {
  const { expense, setExpense } = useContext(ExpenseContext);
  useEffect(() => {
    getExpenses().then((expenseFromDB) => {
      setExpense(expenseFromDB);
    });
  }, []);
  const today = new Date();
  const date7DaysAgo = getDayMinus(today, 7);
  const expenseData = expense.filter((expense) => {
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
