import React, { useCallback, useState, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { Animated } from 'react-native';
import axios from 'axios';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';
import constants from '@/config/constants';

const UploadContainer = () => {
  const [photo, setPhoto] = useState<any>();
  const [progressPercent, setProgressPercent] = useState(0);

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
    console.log(photo);
    const file = photo;
    const formData = new FormData();
    formData.append('testFile', {
      name: file.modificationDate,
      type: file.mime,
      uri: file.path,
    });
    try {
      const result = await axios.post(
        'https://e965-175-117-160-220.jp.ngrok.io/api/v1/photo',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          maxContentLength: 1024 * 1024 * 5,
          maxBodyLength: 1024 * 1024 * 5,
          onUploadProgress: (e: { loaded: number; total: number }) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            console.log(percent);
            setProgressPercent(percent);
            Animated.timing(progressAnim, {
              toValue: percent * 3.58,
              duration: 300,
              useNativeDriver: false,
            }).start();
          },
        },
      );
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <UploadPresenter
      photo={photo}
      onLoadPhoto={onLoadPhoto}
      onUploadPhoto={onUploadPhoto}
      onDeletePhoto={onDeletePhoto}
      photoUiWidth={constants.photoSpec.PHOTO_UI_WIDTH}
      photoUiHeight={constants.photoSpec.PHOTO_UI_HEIGHT}
      progressPercent={progressPercent}
      progressAnim={progressAnim}
    />
  );
};

export default UploadContainer;
