import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>${totalBalance.toFixed(2)}</Text>
      </View>
      <View style={styles.incomeExpenseContainer}>
        <View style={styles.incomeExpenseBlock}>
          <Text style={styles.incomeExpenseTitle}>Total Income</Text>
          <TextInput
            style={styles.input}
            placeholder="Add Income"
            keyboardType="numeric"
            value={income}
            onChangeText={setIncome}
          />
          <Button title="Submit" onPress={handleAddIncome} />
        </View>
        <View style={styles.incomeExpenseBlock}>
          <Text style={styles.incomeExpenseTitle}>Total Expense</Text>
          <TextInput
            style={styles.input}
            placeholder="Add Expense"
            keyboardType="numeric"
            value={expense}
            onChangeText={setExpense}
          />
          <Button title="Submit" onPress={handleAddExpense} />
        </View>
      </View>
      <View style={styles.transactionHistory}>
        <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
        <View style={styles.transactionList}>
          <View style={styles.transaction}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDate}>July 1, 2024</Text>
              <Text style={styles.transactionDescription}>
                Grocery Shopping
              </Text>
            </View>
            <Text style={[styles.transactionAmount, styles.expense]}>
              $50.00
            </Text>
          </View>
          <View style={styles.transaction}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDate}>June 30, 2024</Text>
              <Text style={styles.transactionDescription}>Salary</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.income]}>
              $2000.00
            </Text>
          </View>
          <View style={styles.transaction}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDate}>June 29, 2024</Text>
              <Text style={styles.transactionDescription}>Restaurant</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.expense]}>
              $75.00
            </Text>
          </View>
          <View style={styles.transaction}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDate}>June 28, 2024</Text>
              <Text style={styles.transactionDescription}>Utilities</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.expense]}>
              $120.00
            </Text>
          </View>
          <View style={styles.transaction}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDate}>June 27, 2024</Text>
              <Text style={styles.transactionDescription}>Freelance Work</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.income]}>
              $500.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007aff",
  },
  incomeExpenseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  incomeExpenseBlock: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 5,
  },
  incomeExpenseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  transactionHistory: {
    marginTop: 20,
  },
  transactionHistoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionList: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingTop: 10,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  transactionDetails: {
    flexDirection: "column",
  },
  transactionDate: {
    fontSize: 12,
    color: "#777",
  },
  transactionDescription: {
    fontSize: 16,
    color: "#333",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expense: {
    color: "#ff0000",
  },
  income: {
    color: "#00c853",
  },
});
