import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeDrawerParamList = {
  HomeTopTab: NavigatorScreenParams<HomeTopTabParamList>;
  Upload: undefined;
};

export type HomeTobTabScreenProps<T extends keyof HomeTopTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<HomeTopTabParamList, T>,
    NativeStackScreenProps<RootStackParamList, 'Detail'>
  >;

export type HomeTopTabParamList = {
  ToDest: undefined;
  ToRide: undefined;
};

export type DetailParamList = {
  ToDestDetail: { id: string };
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>;
  Detail: NavigatorScreenParams<DetailParamList>;
};
