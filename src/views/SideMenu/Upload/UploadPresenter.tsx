import React, { ReactComponentElement } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Asset } from 'react-native-image-picker';

interface UploadProps {
  onLoadPhoto: () => void;
  onUploadPhoto: () => void;
  photoInfo: Asset | null;
}

const UploadPresenter = (props: UploadProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.uploadBtn} onPress={props.onLoadPhoto}>
        <Text>Load</Text>
      </Pressable>
      {props.photoInfo && (
        <>
          <Image
            fadeDuration={200}
            style={styles.imageStyle}
            source={{ uri: props.photoInfo.uri }}
          />
          <Pressable style={styles.uploadBtn} onPress={props.onUploadPhoto}>
            <Text>Upload</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#1B2430',
  },
  imageStyle: {
    width: 360,
    height: 500,
    borderRadius: 15,
  },
});

export default UploadPresenter;
