import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//Vista de Actividades
import ActingGameAct from '../activities/ActingGameAct';
import DebateAct from '../activities/DebateAct';
import ExperimentAct from '../activities/ExperimentAct';
import ImReporterAct from '../activities/ImReporterAct';
import IllustrationAct from '../activities/IllustrationAct';
import InvestigationAct from '../activities/InvestigationAct';
import LabytinthAct from '../activities/LabytinthAct';
import QuizAct from '../activities/QuizAct';
import ShortFilmAct from '../activities/ShortFilmAct';
import SingConceptAct from '../activities/SingConceptAct';
import StoryTellerAct from '../activities/StoryTellerAct';
import ArtisticDanceAct from '../activities/ArtisticDanceAct';
import VolunteeringAct from '../activities/VolunteeringAct';
import HangmanAct from '../activities/HangmanAct';
import QuizRadioAct from '../activities/QuizRadioAct';

const TabsNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBarOptions={styleTabBar.tabBar}>
      <Tab.Screen name={'ActingGameAct'} component={ActingGameAct} />
      <Tab.Screen name={'DebateAct'} component={DebateAct} />
      <Tab.Screen name={'ExperimentAct'} component={ExperimentAct} />
      <Tab.Screen name={'ImReporterAct'} component={ImReporterAct} />
      <Tab.Screen name={'IllustrationAct'} component={IllustrationAct} />
      <Tab.Screen name={'InvestigationAct'} component={InvestigationAct} />
      <Tab.Screen name={'LabyrinthAct'} component={LabytinthAct} />
      <Tab.Screen name={'QuizAct'} component={QuizAct} />
      <Tab.Screen name={'ShortFilmAct'} component={ShortFilmAct} />
      <Tab.Screen name={'SingConceptAct'} component={SingConceptAct} />
      <Tab.Screen name={'StoryTellerAct'} component={StoryTellerAct} />
      <Tab.Screen name={'ArtisticDanceAct'} component={ArtisticDanceAct} />
      <Tab.Screen name={'VolunteeringAct'} component={VolunteeringAct} />
      <Tab.Screen name={'HangmanAct'} component={HangmanAct} />
      <Tab.Screen name={'QuizRadioAct'} component={QuizRadioAct} />
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
