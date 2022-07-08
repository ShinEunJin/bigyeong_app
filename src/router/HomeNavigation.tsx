import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ToDest from '@/views/Home/ToDest';
import ToRide from '@/views/Home/ToRide';
import Upload from '@/views/SideMenu/Upload';
import Header from '@/components/Header';

const HomeTopTab = createMaterialTopTabNavigator();
const HomeDrawer = createDrawerNavigator();

const HomeTopTabComponent = () => {
  return (
    <HomeTopTab.Navigator
      initialRouteName='ToDest'
      screenOptions={{ swipeEnabled: false }}>
      <HomeTopTab.Screen name='ToDest' component={ToDest} />
      <HomeTopTab.Screen name='ToRide' component={ToRide} />
    </HomeTopTab.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <HomeDrawer.Navigator
      screenOptions={{ drawerPosition: 'right', header: () => <Header /> }}>
      <HomeDrawer.Screen name='HomeTopTab' component={HomeTopTabComponent} />
      <HomeDrawer.Screen name='Upload' component={Upload} />
    </HomeDrawer.Navigator>
  );
};

export default HomeNavigation;
