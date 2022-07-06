import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeNavigation from './HomeNavigation';
import DetailNavigation from '@/views/Detail';

type MainStackNavigatorTypes = {
  Home: undefined;
  Detail: { id: string; type: 'TODEST' | 'TORIDE' };
};

const MainStackNavigator =
  createNativeStackNavigator<MainStackNavigatorTypes>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainStackNavigator.Screen name='Home' component={HomeNavigation} />
        <MainStackNavigator.Screen name='Detail' component={DetailNavigation} />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
