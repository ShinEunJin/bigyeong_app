import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ToDest from '@/views/Main/ToDest';
import ToRide from '@/views/Main/ToRide';
import Upload from '@/views/SideMenu/Upload';
import Header from '@/components/Header';

const MainTopTab = createMaterialTopTabNavigator();
const MainStack = createNativeStackNavigator();
const HomeDrawer = createDrawerNavigator();

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
        name='HomeTopTab'
        component={MainTopTabComponent}
        options={{ header: () => <Header /> }}
      />
    </MainStack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <HomeDrawer.Navigator
      screenOptions={{ headerShown: false, drawerPosition: 'right' }}>
      <HomeDrawer.Screen name='HomeStack' component={MainStackComponent} />
      <HomeDrawer.Screen name='Upload' component={Upload} />
    </HomeDrawer.Navigator>
  );
};

export default HomeNavigation;
