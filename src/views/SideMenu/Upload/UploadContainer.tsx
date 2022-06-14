import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';

const UploadContainer = () => {
  const uploadPhoto = async () => {
    // ios는 Info.plist 설정 따로 해야된다.(아직 안함)
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.errorCode || result.errorMessage)
      return handlerError.uploadPhotoError(result.errorCode);
  };

  return <UploadPresenter uploadPhoto={uploadPhoto} />;
};

export default UploadContainer;
