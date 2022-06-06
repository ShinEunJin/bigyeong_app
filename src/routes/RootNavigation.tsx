import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '@/views/Main';

type RootStackParamList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="ForPlace">
          {() => (
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Main">
              <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
          )}
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
