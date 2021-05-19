import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: ''}}></Stack.Navigator>
  );
};

export default StackNavigation;
