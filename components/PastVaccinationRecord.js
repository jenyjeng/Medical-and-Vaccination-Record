import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PastVaccinationRecord = ({ petName }) => {
  return (
    <View style={styles.pastRecord}>
      <Text style={styles.recordTitle}>Past Vaccination Record - {petName}</Text>
      <Text>Date: [Past Date]</Text>
      <Text>Type: [Vaccine Type]</Text>
      {/* Add more information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  pastRecord: {
    borderWidth: 1,
    borderColor: '#ccc',
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

export default PastVaccinationRecord;
