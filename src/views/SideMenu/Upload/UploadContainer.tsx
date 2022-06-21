import React, { useCallback, useState } from 'react';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';
import axios from 'axios';

const UploadContainer = () => {
  const [photoInfo, setPhotoInfo] = useState<any>();

  useFocusEffect(
    useCallback(() => {
      setPhotoInfo(null);
    }, []),
  );

  const onLoadPhoto = async () => {
    const result = await ImagePicker.openPicker({
      cropping: true,
      width: 3000,
      height: 4000,
    });
    if (result) {
      console.log(result);
      setPhotoInfo(result);
    }

    // ios는 Info.plist 설정 따로 해야된다.(아직 안함)
    // const result = await launchImageLibrary({
    //   mediaType: 'photo',
    //   maxHeight: 1080,
    //   maxWidth: 2400,
    //   quality: 1,
    // });
    // if (result.errorCode || result.errorMessage)
    //   return handlerError.uploadPhotoError(result.errorCode);
    // if (result.assets) {
    //   const galleryInfo: Asset = result.assets[0];
    //   console.log('galleryInfo', galleryInfo);
    //   setPhotoInfo(galleryInfo);
    // }
  };

  const onUploadPhoto = async () => {
    const file = photoInfo;
    const formData = new FormData();
    formData.append('testFile', {
      name: file?.modificationDate,
      type: file?.mime,
      uri: file?.path,
    });
    const result = await axios.post('https://shin.loca.lt/api/file', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      maxContentLength: 1024 * 1024 * 5,
      maxBodyLength: 1024 * 1024 * 5,
    });
    console.log('result', result.data);
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
