import React, { useState, useCallback } from 'react';
import { RouteProp, useFocusEffect } from '@react-navigation/native';

import ToDestPresenter from './ToDestPresenter';
import { getPhotos } from '@/api/photo';
import constants from '@/config/constants';
import { MainTopTabParamList } from '@/router/HomeNavigation';

export interface PhotoType {
  _id: string;
  category: 'TORIDE' | 'TODEST';
  imageUri: string;
  title: string;
  location: string;
  detailLocation: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

type ToDestProps = {
  route: RouteProp<MainTopTabParamList, 'ToDest'>;
};

const ToDestContainer = ({ route }: ToDestProps) => {
  const [data, setData] = useState<PhotoType[] | null>(null);

  const displayPhotos = async () => {
    const result: PhotoType[] = await getPhotos({
      category: route.name === 'ToDest' ? 'TODEST' : 'TORIDE',
    });
    if (result && result.length > 0) setData(result);
    else setData(null);
  };

  useFocusEffect(
    useCallback(() => {
      displayPhotos();
    }, []),
  );

  return (
    <ToDestPresenter
      data={data}
      photoUiWidth={constants.photoSpec.PHOTO_UI_WIDTH}
    />
  );
};

export default ToDestContainer;
