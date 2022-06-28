import React, { useCallback, useState, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { Animated } from 'react-native';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';
import constants from '@/config/constants';
import { uploadPhoto } from '@/api/photo';

const UploadContainer = () => {
  const [photo, setPhoto] = useState<any>();
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setPhoto(null);
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
      if (originalImage) {
        setPhoto(originalImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUploadPhoto = async () => {
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
