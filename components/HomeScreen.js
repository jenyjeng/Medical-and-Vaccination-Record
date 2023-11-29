import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import RecordListScreen from './RecordListScreen';

const HomeScreen = ({ navigateToScreen }) => {
  return (
    <View style={styles.container}>
      <RecordListScreen navigateToScreen={navigateToScreen} />
      <TouchableHighlight
        style={styles.addButton}
        onPress={() => navigateToScreen('AddRecord')}
      >
        <Text style={styles.buttonText}>Add Record</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  addButton: {
    backgroundColor: 'pink',
    borderWidth: 3,
    borderColor: '#ff08bd',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
