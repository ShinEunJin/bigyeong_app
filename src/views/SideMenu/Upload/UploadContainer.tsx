import React, { useCallback, useState } from 'react';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';

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
    });
    if (result.errorCode || result.errorMessage)
      return handlerError.uploadPhotoError(result.errorCode);
    if (result.assets) {
      const galleryInfo: Asset = result.assets[0];
      setPhotoInfo(galleryInfo);
    }
  };

  const onUploadPhoto = () => {};

  return (
    <UploadPresenter
      onLoadPhoto={onLoadPhoto}
      photoInfo={photoInfo}
      onUploadPhoto={onUploadPhoto}
    />
  );
};

export default UploadContainer;
