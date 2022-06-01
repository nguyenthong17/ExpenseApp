import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../const/Colors";
import { ExpenseContext } from "../store/expense-context";
import ManageForm from "../components/ManageExpense/ManageForm";
import { postExpense } from "../util/http";

export default function ManageScreen({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEditting = !!expenseId;

  const { deleteExpense, updateExpense, addExpense } =
    useContext(ExpenseContext);

  const selectedExpense =
    isEditting &&
    useContext(ExpenseContext).expense.find(
      (expense) => expense.id === expenseId
    );

  function deleteHandler() {
    deleteExpense(expenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expense) {
    if (isEditting) {
      updateExpense(expenseId, expense);
    } else {
      postExpense(expense).then((id) => {
        addExpense({ ...expense, id });
      });
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit expense" : "Add new expense",
    });
  }, [navigation, isEditting]);

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
