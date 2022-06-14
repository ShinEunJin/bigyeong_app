import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ToDest from '@/views/Main/ToDest';
import ToRide from '@/views/Main/ToRide';

type MainTopTabParamList = {
  ToDest: undefined;
  ToRide: undefined;
};

type MainStackParamList = {
  MainStack: undefined;
};

type MainDrawerParamList = {
  MainDrawer: undefined;
};

const MainTopTab = createMaterialTopTabNavigator<MainTopTabParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainDrawer = createDrawerNavigator<MainDrawerParamList>();

const MainTopTabComponent = () => {
  return (
    <MainTopTab.Navigator initialRouteName='ToDest'>
      <MainTopTab.Screen name='ToDest' component={ToDest} />
      <MainTopTab.Screen name='ToRide' component={ToRide} />
    </MainTopTab.Navigator>
  );
};

const MainStackComponent = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='MainStack' component={MainTopTabComponent} />
    </MainStack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <MainDrawer.Navigator screenOptions={{ headerShown: false }}>
      <MainDrawer.Screen name='MainDrawer' component={MainStackComponent} />
    </MainDrawer.Navigator>
  );
};

export default HomeNavigation;
