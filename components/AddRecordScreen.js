import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const AddRecordScreen = () => {
  const [petName, setPetName] = useState('');
  const [age, setAge] = useState('');
  const [recordType, setRecordType] = useState(''); // 'treatment' or 'vaccination'
  const [recordDate, setRecordDate] = useState('');
  const [doctorAssigned, setDoctorAssigned] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddRecord = () => {
    // Implement logic to add the record with the captured information
    // For example, you can send this information to an API or update local state.
    // You can also navigate back to the record list screen after adding the record.
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const selectRecordType = (type) => {
    setRecordType(type);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Record</Text>
      <TextInput
        style={styles.input}
        placeholder="Pet Name"
        value={petName}
        onChangeText={setPetName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>{recordType ? `Selected: ${recordType}` : 'Select Record Type'}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Record Date"
        value={recordDate}
        onChangeText={setRecordDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Doctor Assigned"
        value={doctorAssigned}
        onChangeText={setDoctorAssigned}
      />
      {/* Add Record Button with separate style */}
      <TouchableOpacity style={styles.addRecordButton} onPress={handleAddRecord}>
        <Text style={styles.buttonText}>Add Record</Text>
      </TouchableOpacity>

      {/* Modal for selecting record type */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Select Record Type</Text>
          <TouchableOpacity onPress={() => selectRecordType('vaccination')} style={styles.modalOption}>
            <Text>Vaccination Record</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectRecordType('treatment')} style={styles.modalOption}>
            <Text>Treatment Record</Text>
          </TouchableOpacity>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 3,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 10,
  },
  button: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 3,
    justifyContent: 'center',
    paddingLeft: 8,
    marginBottom: 16,
    borderRadius: 10,
    
  },
  addRecordButton: {
    height: 40,
    backgroundColor: 'pink',
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 10,
    
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
   
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalOption: {
    padding: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'pink',
    width: '95%',
    alignItems: 'center',
    borderColor: 'pink',
    borderWidth: 3,
    borderRadius: 10,
  },
});

export default AddRecordScreen;
