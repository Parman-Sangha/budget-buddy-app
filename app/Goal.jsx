import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const BudgetGoals = () => {
  const navigation = useNavigation();
  const [goal, setGoal] = useState('');
  const [currentGoal, setCurrentGoal] = useState(0);
  const [totalIncome, setTotalIncome] = useState(2000); 
  const [totalExpense, setTotalExpense] = useState(500); 
  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Goals</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Set Your Goal</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your goal"
          keyboardType="numeric"
          value={goal}
          onChangeText={setGoal}
        />
        <TouchableOpacity style={styles.button} onPress={() => { /* handleSetGoal logic */ }}>
          <Text style={styles.buttonText}>Set Goal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#495057',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  progressContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    color: '#343a40',
  },
  progressText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#495057',
  },
  progressBar: {
    flexDirection: 'row',
    height: 25,
    width: '100%',
    backgroundColor: '#e9ecef',
    borderRadius: 12,
    overflow: 'hidden',
  },
  progressSegment: {
    flex: 1,
    margin: 1,
  },
  progressActive: {
    backgroundColor: '#28a745',
  },
  progressInactive: {
    backgroundColor: '#e9ecef',
  },
});