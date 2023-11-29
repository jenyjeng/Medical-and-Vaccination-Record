import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VaccinationRecord = ({ pet }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vaccination Record</Text>
      {pet.vaccineHistory.map((record, index) => (
        <View key={index} style={styles.record}>
          <Text>Date: {record.date}</Text>
          <Text>Vaccine: {record.vaccine}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  record: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
});

export default VaccinationRecord;
