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

  const handleSetGoal = () => {
    const goalValue = parseFloat(goal);
    if (isNaN(goalValue) || goalValue <= 0) {
      Alert.alert('Invalid Goal', 'Please enter a valid goal amount.');
      return;
    }
    setCurrentGoal(goalValue);
    setGoal('');
    setProgress(0);
  };
  
  useEffect(() => {
    if (currentGoal > 0) {
      const netSavings = totalIncome - totalExpense;
      const progressPercentage = (netSavings / currentGoal) * 100;
      setProgress(progressPercentage > 100 ? 100 : progressPercentage);
    } else {
      setProgress(0);
    }
  }, [totalIncome, totalExpense, currentGoal]);
};
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
      <TouchableOpacity style={styles.button} onPress={handleSetGoal}>
        <Text style={styles.buttonText}>Set Goal</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.progressContainer}>
      <Text style={styles.progressTitle}>Current Goal: ${currentGoal.toFixed(2)}</Text>
      <Text style={styles.progressText}>Progress: {progress.toFixed(2)}%</Text>
      <View style={styles.progressBar}>
        {[...Array(10)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressSegment,
              progress > index * 10 ? styles.progressActive : styles.progressInactive,
            ]}
          />
        ))}
      </View>
    </View>
  </View>
);

export default BudgetGoals;
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