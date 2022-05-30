import { StyleSheet, FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  const navigation = useNavigation();

  function renderItemHandler({ item }) {
    function pressHandler() {
      navigation.navigate("ManageExpense", { expenseId: item.id });
    }
    return <ExpenseItem item={item} onPress={pressHandler} />;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderItemHandler}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
