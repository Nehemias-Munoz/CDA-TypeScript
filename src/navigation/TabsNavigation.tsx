import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TabsNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return <Tab.Navigator></Tab.Navigator>;
};

export default TabsNavigation;
