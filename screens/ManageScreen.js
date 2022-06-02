import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useContext, useState } from "react";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../const/Colors";
import { ExpenseContext } from "../store/expense-context";
import ManageForm from "../components/ManageExpense/ManageForm";
import { deleteExpenseDB, postExpense, updateExpenseDB } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function ManageScreen({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const expenseId = route.params?.expenseId;
  const isEditting = !!expenseId;

  const { deleteExpense, updateExpense, addExpense } =
    useContext(ExpenseContext);

  const selectedExpense =
    isEditting &&
    useContext(ExpenseContext).expense.find(
      (expense) => expense.id === expenseId
    );

  async function deleteHandler() {
    setIsLoading(true);
    try {
      deleteExpense(expenseId);
      await deleteExpenseDB(expenseId);
      navigation.goBack();
    } catch {
      setError("Could not send request. Please try again");
    }
    setIsLoading(false);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expense) {
    setIsLoading(true);
    try {
      if (isEditting) {
        updateExpense(expenseId, expense);
        await updateExpenseDB(expenseId, expense);
      } else {
        const id = await postExpense(expense);
        addExpense({ ...expense, id });
      }
      navigation.goBack();
    } catch {
      setError("Could not connect to database. Please try again");
    }
    setIsLoading(false);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit expense" : "Add new expense",
    });
  }, [navigation, isEditting]);

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.screenRoot}>
      <ManageForm
        submitTitleText={isEditting ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        selectedExpense={selectedExpense ? selectedExpense : null}
        isEditting={isEditting}
      />

      {isEditting && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
