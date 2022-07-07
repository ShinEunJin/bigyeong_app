import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDestDetail from '@/views/Detail';

const DetailStack = createNativeStackNavigator();

const DetailNavigation = () => {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen name='ToDestDetail' component={ToDestDetail} />
    </DetailStack.Navigator>
  );
};

export default DetailNavigation;
