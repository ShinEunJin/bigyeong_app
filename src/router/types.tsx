import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeDrawerParamList = {
  HomeStack: HomeStackParamList;
  upload: undefined;
};

export type HomeStackParamList = {
  HomeTopTab: HomeTopTabParamList;
};

export type HomeTopTabParamList = {
  ToDest: undefined;
  ToRide: undefined;
};

export type DetailParamList = {
  ToDestDetail: undefined;
};

export type ToDestDetailNavigationProp = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'Detail'>,
  NativeStackScreenProps<DetailParamList, 'ToDestDetail'>
>;

export type RootStackParamList = {
  Home: undefined;
  Detail: NavigatorScreenParams<DetailParamList>;
};
