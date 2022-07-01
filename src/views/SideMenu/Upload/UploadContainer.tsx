import React, { useCallback, useState, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { Alert } from 'react-native';

import UploadPresenter from './UploadPresenter';
import handlerError from '@/utils/handleError';
import constants from '@/config/constants';
import { uploadPhoto } from '@/api/photo';

const UploadContainer = () => {
  const [photo, setPhoto] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [detailLocation, setDetailLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<null | 'TORIDE' | 'TODEST'>(null);

  useFocusEffect(
    useCallback(() => {
      setPhoto(null);
      setLoading(false);
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
        mediaType: 'photo',
      });
      if (originalImage) {
        setPhoto(originalImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const warnBlank = (text: string) => {
    Alert.alert(text);
  };

  const onUploadPhoto = async () => {
    if (title.trim() === '') return warnBlank('제목 공백');
    if (location.trim() === '') return warnBlank('위치 공백');
    if (detailLocation.trim() === '') return warnBlank('상세위치 공백');
    if (description.trim() === '') return warnBlank('설명 공백');
    if (!category) return warnBlank('카테고리 설정');
    const file = photo;
    const formData = new FormData();
    // server multer 때문에 file이 제일 마지막으로 formData에 넣어서 보내야 한다.
    formData.append(
      'data',
      JSON.stringify({
        title,
        location,
        detailLocation,
        description,
        category,
      }),
    );
    formData.append('photo', {
      name: file.modificationDate,
      type: file.mime,
      uri: file.path,
    });
    setLoading(true);
    const result = await uploadPhoto(formData);
    if (result) {
      console.log('result', result);
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
      setTitle={setTitle}
      setLocation={setLocation}
      setDetailLocation={setDetailLocation}
      setDescription={setDescription}
      setCategory={setCategory}
      title={title}
      location={location}
      detailLocation={detailLocation}
      description={description}
      category={category}
    />
  );
};

export default UploadContainer;
