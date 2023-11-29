import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.backButton}>
    <Ionicons name="arrow-back" size={24} color="white" />
  </TouchableOpacity>
);

const CustomHeader = ({ title, showBackButton, onBackPress }) => {
  return (
    <View style={styles.header}>
      {showBackButton && <BackButton onPress={onBackPress} />}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    marginTop: 10,
  },
  backButton: {
    marginTop: 10,
  },
});

export default CustomHeader;
