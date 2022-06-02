import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDayMinus } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentScreen() {
  const { expense, setExpense } = useContext(ExpenseContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getExpenses()
      .then((expenseFromDB) => {
        setExpense(expenseFromDB);
      })
      .catch((error) => {
        setError("Could not fetch data");
      });
    setIsLoading(false);
  }, []);

  const today = new Date();
  const date7DaysAgo = getDayMinus(today, 7);
  const expenseData = expense.filter((expense) => {
    return expense.date > date7DaysAgo;
  });

  if (!isLoading && error) {
    return <ErrorOverlay message={error} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpenseOutput
      expensePeriod={"Last 7 days"}
      expenses={expenseData}
      fallbackText="There is no expense in the lat 7 days"
    />
  );
}

const styles = StyleSheet.create({});
