import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PhotoType } from './ToDestContainer';

type ToDestPropsType = {
  data: PhotoType[] | null;
  photoUiWidth: number;
};

const ToDestPresenter = (props: ToDestPropsType) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {props.data &&
        props.data.length >= 1 &&
        props.data.map((item, idx) => (
          <View
            key={idx}
            style={[styles.itemBox, { width: props.photoUiWidth }]}>
            <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
            <View style={styles.itemImageCover}></View>
          </View>
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
    borderRadius: 20,
    overflow: 'hidden',
  },
  itemImageCover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default ToDestPresenter;
