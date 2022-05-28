import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";

function renderItemHandler({ item, index }) {
  const { description, amount, date } = item;
  return (
    <View>
      <View>
        <Text>{description}</Text>
        <Text>{date.toString()}</Text>
      </View>
      <View>
        <Text>{amount}</Text>
      </View>
    </View>
  );
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
