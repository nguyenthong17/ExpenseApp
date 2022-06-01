import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import ErrorMessage from "../UI/ErrorMessage";

export default function ManageForm({
  submitTitleText,
  onCancel,
  onSubmit,
  selectedExpense,
  isEditting,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: selectedExpense ? selectedExpense.amount.toString() : "",
      isValid: !!selectedExpense || !isEditting,
    },
    date: {
      value: selectedExpense ? getFormattedDate(selectedExpense.date) : "",
      isValid: !!selectedExpense || !isEditting,
    },
    description: {
      value: selectedExpense ? selectedExpense.description : "",
      isValid: !!selectedExpense || !isEditting,
    },
  });

  function inputHandler(identifier, enteredText) {
    setInputs((curInput) => {
      return {
        ...curInput,
        [identifier]: { value: enteredText, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expense = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid =
      !isNaN(inputs.amount.value) && inputs.amount.value > 0;
    const dateIsValid = !!new Date(inputs.date.value).getTime();
    const descriptionIsValid = inputs.description.value.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((curInput) => {
        return {
          amount: { value: curInput.amount.value, isValid: amountIsValid },
          date: { value: curInput.date.value, isValid: dateIsValid },
          description: {
            value: curInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      // Alert.alert("Invalid Input", "Please check your input values");
      return;
    }

    onSubmit(expense);
  }

  const formNotValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.topInputContainer}>
        <Input
          labelText="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
          isInvalid={!inputs.amount.isValid}
        />
        <Input
          labelText="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
          isInvalid={!inputs.date.isValid}
        />
      </View>
      <Input
        labelText="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false,
          //autoCapitalize: "none"
          onChangeText: inputHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
        isInvalid={!inputs.description.isValid}
      />
      {formNotValid && (
        <ErrorMessage>Your input is not valid. Please check again</ErrorMessage>
      )}
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitTitleText}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
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
