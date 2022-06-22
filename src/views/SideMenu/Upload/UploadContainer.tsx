import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';
import Contants from '@/config';

const UploadContainer = () => {
  const [photoInfo, setPhotoInfo] = useState<any>();

  useFocusEffect(
    useCallback(() => {
      setPhotoInfo(null);
    }, []),
  );

  const onLoadPhoto = async () => {
    try {
      const originalImage = await ImagePicker.openPicker({
        cropping: true,
        width: Contants.photoSpec.PHOTO_LOAD_WIDTH,
        height: Contants.photoSpec.PHOTO_LOAD_HEIGHT,
        mediaType: 'video',
      });
      console.log(originalImage);
      if (originalImage) {
        setPhotoInfo(originalImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUploadPhoto = async () => {
    console.log(photoInfo);
    const file = photoInfo;
    const formData = new FormData();
    console.log({
      name: file?.modificationDate
        ? file.modificationDate
        : file.name.toLowerCase(),
      type: file?.mime
        ? file.mime
        : `image/${file.name.split('.')[1].toLowerCase()}`,
      uri: file?.path.toLowerCase(),
    });
    formData.append('testFile', {
      name: file?.modificationDate ? file.modificationDate : file.name,
      type: file?.mime
        ? file.mime
        : `image/${file.name.split('.')[1].toLowerCase()}`,
      uri: file?.uri ? file.uri : file.path,
    });
    const result = await axios.post(
      'https://d68a-183-98-2-180.jp.ngrok.io/api/file',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
        maxContentLength: 1024 * 1024 * 5,
        maxBodyLength: 1024 * 1024 * 5,
      },
    );
    console.log('result', result.data);
  };

  return (
    <UploadPresenter
      onLoadPhoto={onLoadPhoto}
      photoInfo={photoInfo}
      onUploadPhoto={onUploadPhoto}
      photoUiWidth={Contants.photoSpec.PHOTO_UI_WIDTH}
      photoUiHeight={Contants.photoSpec.PHOTO_UI_HEIGHT}
    />
  );
};

export default UploadContainer;
