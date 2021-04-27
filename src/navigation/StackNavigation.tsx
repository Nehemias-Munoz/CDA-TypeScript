import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AssignaturesScreen from '../screens/AssignaturesScreen';
import LearningStyleScreen from '../screens/LearningStyleScreen';
import TabsNavigation from './TabsNavigation';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '', headerTitle: ''}}>
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'RegisterScreen'} component={RegisterScreen} />
      <Stack.Screen
        name={'AssignaturesScreen'}
        component={AssignaturesScreen}
      />
      <Stack.Screen
        name={'LearningStyleScreen'}
        component={LearningStyleScreen}
      />
      <Stack.Screen name={'TabsNavigation'} component={TabsNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
