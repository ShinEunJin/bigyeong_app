import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeNavigation from './HomeNavigation';
import DetailNavigation from './DetailNavigation';
import { RootStackParamList } from './types';

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <RootStackNavigator.Screen name='Home' component={HomeNavigation} />
        <RootStackNavigator.Screen name='Detail' component={DetailNavigation} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
