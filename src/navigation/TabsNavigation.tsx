import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActingGameAct from '../activities/ActingGameAct';
const TabsNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name={'ActingGameAct'} component={ActingGameAct} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
