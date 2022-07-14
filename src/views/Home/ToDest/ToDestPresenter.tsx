import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PhotoType } from '@/types';

type ToDestPropsType = {
  data: PhotoType[] | null;
  photoUiWidth: number;
  onPressDetail: (id: string) => void;
};

const ToDestPresenter = (props: ToDestPropsType) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {props.data &&
        props.data.length >= 1 &&
        props.data.map((item, idx) => (
          <Pressable
            key={idx}
            onPress={() => props.onPressDetail(item._id)}
            style={[styles.itemBox, { width: props.photoUiWidth }]}>
            <Image
              resizeMode='contain'
              source={{ uri: item.imageUri }}
              style={styles.itemImage}
            />
            <View style={styles.itemImageCover}></View>
          </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 50,
  },
  itemBox: {
    height: 360,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 30,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemImageCover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    opacity: 0.6,
    borderTopWidth: 0.5,
  },
});

export default ToDestPresenter;
