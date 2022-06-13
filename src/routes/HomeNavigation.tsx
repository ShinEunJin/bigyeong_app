import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Main from '@/views/Main';
import Upload from '@/views/SideMenu/Upload';

type MainStackParamList = {
  Main: undefined;
};

type MainTopTabParamList = {
  ToDest: undefined;
  ToRide: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainTopTab = createMaterialTopTabNavigator<MainTopTabParamList>();

const MainTopTabComponent = () => {
  return (
    <MainTopTab.Navigator initialRouteName='ToDest'>
      <MainTopTab.Screen name='ToDest' component={Main} />
      <MainTopTab.Screen name='ToRide' component={Upload} />
    </MainTopTab.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Main' component={MainTopTabComponent} />
    </MainStack.Navigator>
  );
};

export default HomeNavigation;
