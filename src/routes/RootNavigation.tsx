import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '@/views/Main';

type BottomTabParamList = {
  ForPlace: undefined;
};

type ForPlaceStackParamList = {
  Main: undefined;
};

const ForPlaceStack = createNativeStackNavigator<ForPlaceStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          name="ForPlace"
          options={{tabBarLabelStyle: {color: '#000'}}}>
          {() => (
            <ForPlaceStack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Main">
              <ForPlaceStack.Screen name="Main" component={Main} />
            </ForPlaceStack.Navigator>
          )}
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
