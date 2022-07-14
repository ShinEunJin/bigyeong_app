import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { PhotoType } from '@/types';

interface DetailProps {
  data: PhotoType | null;
  photoUiWidth: number;
  photoUiHeight: number;
}

const DetailPresenter = (props: DetailProps) => {
  return (
    <View>
      {props.data ? (
        <View>
          <Text style={{ color: 'black' }}>{props.data.title}</Text>
          <Image
            resizeMode='contain'
            style={{ width: props.photoUiWidth, height: props.photoUiHeight }}
            source={{ uri: props.data.imageUri }}
          />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailPresenter;
