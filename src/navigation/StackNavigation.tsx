import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: ''}}>
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
