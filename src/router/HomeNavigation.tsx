import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ToDest from '@/views/Main/ToDest';
import ToRide from '@/views/Main/ToRide';
import Upload from '@/views/SideMenu/Upload';
import Header from '@/components/Header';

export type MainTopTabParamList = {
  ToDest: undefined;
  ToRide: undefined;
};

type MainStackParamList = {
  MainTopTab: undefined;
};

type MainDrawerParamList = {
  MainStack: undefined;
  Upload: undefined;
};

const MainTopTab = createMaterialTopTabNavigator<MainTopTabParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainDrawer = createDrawerNavigator<MainDrawerParamList>();

const MainTopTabComponent = () => {
  return (
    <MainTopTab.Navigator
      initialRouteName='ToDest'
      screenOptions={{ swipeEnabled: false }}>
      <MainTopTab.Screen name='ToDest' component={ToDest} />
      <MainTopTab.Screen name='ToRide' component={ToRide} />
    </MainTopTab.Navigator>
  );
};

const MainStackComponent = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='MainTopTab'
        component={MainTopTabComponent}
        options={{ header: () => <Header /> }}
      />
    </MainStack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <MainDrawer.Navigator
      screenOptions={{ headerShown: false, drawerPosition: 'right' }}>
      <MainDrawer.Screen name='MainStack' component={MainStackComponent} />
      <MainDrawer.Screen name='Upload' component={Upload} />
    </MainDrawer.Navigator>
  );
};

export default HomeNavigation;
