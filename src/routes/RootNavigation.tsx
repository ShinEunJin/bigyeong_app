import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '@/views/Main';

type RootStackParamList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
