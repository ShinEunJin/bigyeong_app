import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeNavigation from './HomeNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
