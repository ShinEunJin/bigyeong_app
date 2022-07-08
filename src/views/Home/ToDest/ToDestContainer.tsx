import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import ToDestPresenter from './ToDestPresenter';
import { getPhotos } from '@/api/photo';
import constants from '@/config/constants';
import { HomeTobTabScreenProps } from '@/router/types';

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

const ToDestContainer = ({
  navigation,
  route,
}: HomeTobTabScreenProps<'ToDest'>) => {
  const [data, setData] = useState<PhotoType[] | null>(null);

  const onPressDetail = (id: string) => {
    navigation.navigate('Detail', {
      screen: 'ToDestDetail',
      params: { id },
    });
  };

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
      onPressDetail={onPressDetail}
    />
  );
};

export default ToDestContainer;
