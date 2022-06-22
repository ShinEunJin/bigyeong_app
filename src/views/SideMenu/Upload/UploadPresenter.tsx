import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';

interface UploadProps {
  onLoadPhoto: () => void;
  onUploadPhoto: () => void;
  photoUiWidth: number;
  photoUiHeight: number;
  photoInfo: {
    path?: string;
    width: number;
    height: number;
    uri?: string;
  } | null;
}

const UploadPresenter = (props: UploadProps) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

  return (
    <View style={styles.container}>
      <Pressable style={styles.uploadBtn} onPress={props.onLoadPhoto}>
        <Text>Load</Text>
      </Pressable>
      {props.photoInfo && (
        <>
          <Image
            fadeDuration={200}
            style={[
              styles.imageStyle,
              {
                width: props.photoUiWidth,
                height: props.photoUiHeight,
              },
            ]}
            source={{
              uri: props.photoInfo.uri
                ? props.photoInfo.uri
                : props.photoInfo.path,
            }}
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
    borderRadius: 15,
  },
});

export default UploadPresenter;
