import { ErrorCode } from 'react-native-image-picker';

interface handlerErrorType {
  uploadPhotoError: (errorCode: ErrorCode | undefined) => string;
}

const handlerError: handlerErrorType = {
  uploadPhotoError: (errorCode) => {
    let message = '';
    switch (errorCode) {
      case 'camera_unavailable':
        message = '사용할 수 없는 카메라 입니다.';
        break;
      case 'permission':
        message = '카메라를 사용하기 위해서 권한 승인이 필요합니다.';
        break;
      default:
        message = '카메라를 사용할 수 없습니다.';
    }
    return message;
  },
};

export default handlerError;
