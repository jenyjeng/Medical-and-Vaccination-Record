import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PastTreatmentRecord = ({ petName }) => {
  return (
    <View style={styles.treatmentRecord}>
      <Text style={styles.recordTitle}>Treatment Record - {petName}</Text>
      <Text>Date: [Treatment Date]</Text>
      <Text>Doctor Assigned: [Doctor Name]</Text>
      {/* Add more information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  treatmentRecord: {
    borderWidth: 1,
    borderColor: 'Black',
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default PastTreatmentRecord;
