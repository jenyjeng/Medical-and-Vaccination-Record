
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import RecordListScreen from './component/RecordListScreen';
import AddRecordScreen from './component/AddRecordScreen';
import PastVaccinationRecord from './component/PastVaccinationRecord'; // Import your component
import PastTreatmentRecord from './component/PastTreatmentRecord'; // Import your component

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecordList" component={RecordListScreen} />
        <Stack.Screen name="AddRecord" component={AddRecordScreen} />
        <Stack.Screen name="PastVaccinationRecord" component={PastVaccinationRecord} />
        <Stack.Screen name="PastTreatmentRecord" component={PastTreatmentRecord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
