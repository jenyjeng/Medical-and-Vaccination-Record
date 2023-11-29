import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import PastTreatmentRecord from './PastTreatmentRecord';


const RecordListScreen = ({ navigateToScreen }) => {
  const [expandedRecords, setExpandedRecords] = useState([]);

  const toggleExpansion = (recordNumber) => {
    setExpandedRecords((prevExpanded) => {
      if (prevExpanded.includes(recordNumber)) {
        return prevExpanded.filter((record) => record !== recordNumber);
      } else {
        return [...prevExpanded, recordNumber];
      }
    });
  };

  const navigateToPastVaccinationRecord = () => {
    navigateToScreen('PastVaccinationRecord');
  };

  const navigateToPastTreatmentRecord = () => {
    // Pass the necessary information to PastTreatmentRecord
    navigateToScreen('PastTreatmentRecord', {
      petName: 'Primo', // Replace with the actual petName from your data
      // Add more information as needed
    });
  };

  const renderRecordSection = (recordNumber, petName, age, doctorVaccination, treatment, doctorTreatment) => {
    return (
      <View style={styles.petRecord} key={recordNumber}>
        <TouchableOpacity onPress={() => toggleExpansion(recordNumber)}>
          <Text style={styles.recordTitle}>{petName}</Text>
        </TouchableOpacity>

        {expandedRecords.includes(recordNumber) && (
          <View style={styles.recordSection}>
            <View style={styles.recordBox}>
              <Text style={styles.recordSubtitle}>Vaccination Record</Text>
              <View style={styles.recordInfo}>
                <Text>Age: {age}</Text>
                <Text>Date Vaccination: November 2, 2022</Text>
                <Text>Doctor Assigned: {doctorVaccination}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Past Vaccination Records"
                  onPress={navigateToPastVaccinationRecord}
                />
              </View>
            </View>

            {/* Treatment Section (Merged Cough and Allergies) */}
            <View style={styles.recordBox}>
              <Text style={styles.recordSubtitle}>Treatment Record</Text>
              <View style={styles.recordInfo}>
                <Text>Treatment: {treatment}</Text>
                <Text>Date: January 10, 2023</Text>
                <Text>Doctor Assigned: {doctorTreatment}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Past Treatment Record"
                  onPress={navigateToPastTreatmentRecord}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderRecordSection(1, 'Primo', '2 years old', 'Doc. Sanchez', 'Cough', 'Dr. Smith')}
      {renderRecordSection(2, 'Bella', '3 years old', 'Doc. Johnson', 'Fever', 'Dr. Brown')}
      {/* Add more pet records as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  petRecord: {
    borderWidth: 3,
    borderColor: 'pink',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recordSection: {
    marginVertical: 5,
  },
  recordBox: {
    marginBottom: 20,
  },
  recordSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recordInfo: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default RecordListScreen;
