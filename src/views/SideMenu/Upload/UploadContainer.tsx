import React, { useCallback, useState } from 'react';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';
import axios from 'axios';

const UploadContainer = () => {
  const [photoInfo, setPhotoInfo] = useState<Asset | null>(null);

  useFocusEffect(
    useCallback(() => {
      setPhotoInfo(null);
    }, []),
  );

  const onLoadPhoto = async () => {
    // ios는 Info.plist 설정 따로 해야된다.(아직 안함)
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 2400,
      maxWidth: 1080,
      quality: 1,
    });
    if (result.errorCode || result.errorMessage)
      return handlerError.uploadPhotoError(result.errorCode);
    if (result.assets) {
      const galleryInfo: Asset = result.assets[0];
      console.log('galleryInfo', galleryInfo);
      setPhotoInfo(galleryInfo);
    }
  };

  const onUploadPhoto = async () => {
    // const result = await axios.post('https://shin.loca.lt/api/test', 'hihi');
    // console.log('result', result.data);
    const file = photoInfo;
    const formData = new FormData();
    formData.append('testFile', {
      name: file?.fileName,
      type: file?.type,
      uri: file?.uri,
    });
    for (let key of formData['_parts'].entries()) {
      console.log(key[0], key[1]);
    }
    // setTimeout(() => {
    //   for (let part of formData.keys()) {
    //     console.log(part[0], '-', part[1]);
    //   }
    // }, 5000);
    // const result = await axios.post('https://shin.loca.lt/api/file', formData, {
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   maxContentLength: Infinity,
    //   maxBodyLength: Infinity,
    // });
    // console.log('result', result.data);
  };

  return (
    <UploadPresenter
      onLoadPhoto={onLoadPhoto}
      photoInfo={photoInfo}
      onUploadPhoto={onUploadPhoto}
    />
  );
};

export default UploadContainer;
