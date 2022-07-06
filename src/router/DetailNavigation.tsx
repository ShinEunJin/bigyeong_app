import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import ToDestDetail from '@/views/Detail';

type ToDestDetailStackParamList = {
  ToDestDetail: { id: string };
};

export type ToDestDetailProps = NativeStackScreenProps<
  ToDestDetailStackParamList,
  'ToDestDetail'
>;

const ToDestDetailStack =
  createNativeStackNavigator<ToDestDetailStackParamList>();

const ToDestDetailNavigation = () => {
  <ToDestDetailStack.Screen name='ToDestDetail' component={ToDestDetail} />;
};

export default ToDestDetailNavigation;
