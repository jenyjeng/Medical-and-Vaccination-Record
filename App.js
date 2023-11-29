
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import RecordListScreen from './components/RecordListScreen';
import AddRecordScreen from './components/AddRecordScreen';
import CustomHeader from './components/CustomHeader';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  const getHeaderTitle = () => {
    switch (currentScreen) {
      case 'RecordList':
        return 'Medical Records';
      case 'AddRecord':
        return 'Add Medical Record';
      
      default:
        return 'Medical Record';
      
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title={getHeaderTitle()}
        showBackButton={currentScreen !== 'Home'}
        onBackPress={() => navigateToScreen('Home')}
      />
      {currentScreen === 'Home' && <HomeScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'RecordList' && <RecordListScreen navigateToScreen={navigateToScreen} />}
      {currentScreen === 'AddRecord' && <AddRecordScreen navigateToScreen={navigateToScreen} buttonStyle={styles.addButton} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  
});

export default App;