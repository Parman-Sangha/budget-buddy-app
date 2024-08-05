import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Transaction = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <View style={styles.formGroup}>
        <Text>Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Type"
          value={type}
          onChangeText={setType}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChangeText={setDate}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Notes</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Notes"
          multiline
          value={notes}
          onChangeText={setNotes}
        />
      </View>
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </ScrollView>
  );
};

export default AddTransaction;

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
  formGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    height: 100,
  },
});
