import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function pressHandler() {
  console.log("pressed");
}

function renderItemHandler({ item }) {
  return <ExpenseItem item={item} onPress={pressHandler} />;
}

export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderItemHandler}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
