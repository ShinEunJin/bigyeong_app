import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import ToRidePresenter from './ToRidePresenter';
import { getPhotos } from '@/api/photo';

const ToRideContainer = () => {
  const displayPhotos = async () => {
    const result = await getPhotos();
    if (result) {
      console.log(result);
    }
  };

  useFocusEffect(
    useCallback(() => {
      displayPhotos();
    }, []),
  );

  return <ToRidePresenter />;
};

export default ToRideContainer;
