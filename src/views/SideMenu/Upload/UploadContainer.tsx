import React, { useCallback, useState, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { Animated } from 'react-native';
import axios from 'axios';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';
import constants from '@/config/constants';
import { uploadPhoto } from '@/api/photo';

const UploadContainer = () => {
  const [photo, setPhoto] = useState<any>();
  const [progressPercent, setProgressPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  const progressAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      setPhoto(null);
      setProgressPercent(0);
    }, []),
  );

  const onDeletePhoto = async () => {
    setPhoto(null);
  };

  const onLoadPhoto = async () => {
    try {
      const originalImage = await ImagePicker.openPicker({
        cropping: true,
        width: constants.photoSpec.PHOTO_LOAD_WIDTH,
        height: constants.photoSpec.PHOTO_LOAD_HEIGHT,
        mediaType: 'video',
      });
      console.log(originalImage);
      if (originalImage) {
        setPhoto(originalImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUploadPhoto = async () => {
    console.log('click');
    console.log(photo);
    setLoading(true);
    const file = photo;
    const formData = new FormData();
    formData.append('testFile', {
      name: file.modificationDate,
      type: file.mime,
      uri: file.path,
    });
    const result = await uploadPhoto(formData);
    if (result) {
      setLoading(false);
      setPhoto(null);
    }
  };

  return (
    <UploadPresenter
      photo={photo}
      loading={loading}
      onLoadPhoto={onLoadPhoto}
      onUploadPhoto={onUploadPhoto}
      onDeletePhoto={onDeletePhoto}
      photoUiWidth={constants.photoSpec.PHOTO_UI_WIDTH}
      photoUiHeight={constants.photoSpec.PHOTO_UI_HEIGHT}
    />
  );
};

export default UploadContainer;
