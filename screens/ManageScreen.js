import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../const/Colors";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/expense-context";

export default function ManageScreen({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEditting = !!expenseId;

  const { deleteExpense, updateExpense, addExpense } =
    useContext(ExpenseContext);

  function deleteHandler() {
    deleteExpense(expenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditting) {
      updateExpense(expenseId, {}); //add later
    } else {
      addExpense({}); //add later
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
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditting ? "Update" : "Add"}
        </Button>
      </View>

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
      {!isEditting && <Text>Add new item</Text>}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
