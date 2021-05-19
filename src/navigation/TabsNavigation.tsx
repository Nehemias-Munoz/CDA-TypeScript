import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActingGameAct from '../activities/ActingGameAct';
const TabsNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBarOptions={styleTabBar.tabBar}>
      <Tab.Screen name={'ActingGameAct'} component={ActingGameAct} />
    </Tab.Navigator>
  );
};
const styleTabBar = {
  tabBar: {
    showLabel: false,
    allowFontScaling: true,
    tabStyle: {
      padding: 0,
      height: 1,
    },
  },
};
export default TabsNavigation;
