interface handlerErrorType {
  uploadPhotoError: (errorCode: string | undefined) => string;
}

const handlerError: handlerErrorType = {
  uploadPhotoError: (errorCode) => {
    let message = '';
    switch (errorCode) {
      case 'test':
        console.log(test);
    }
    return message;
  },
};

export default handlerError;
