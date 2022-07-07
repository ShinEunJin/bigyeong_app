import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeNavigation from './HomeNavigation';
import DetailNavigation from './DetailNavigation';
import { RootStackParamList } from './types';

const MainStackNavigator = createNativeStackNavigator<RootStackParamList>();

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
