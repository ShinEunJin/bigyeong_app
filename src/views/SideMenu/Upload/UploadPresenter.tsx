import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

interface UploadProps {
  onLoadPhoto: () => void;
  onUploadPhoto: () => void;
  onDeletePhoto: () => void;
  loading: boolean;
  photoUiWidth: number;
  photoUiHeight: number;
  photo: {
    path: string;
    width: number;
    height: number;
  } | null;
}

const UploadPresenter = (props: UploadProps) => {
  const { width: screenW, height: screenH } = Dimensions.get('screen');

  return (
    <View style={styles.container}>
      {props.loading && (
        <View
          style={[
            styles.loadingContainer,
            { width: screenW, height: screenH },
          ]}>
          <ActivityIndicator size='large' color='#000' />
        </View>
      )}
      {props.photo ? (
        <View>
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
              uri: props.photo.path,
            }}
          />
          <Pressable style={styles.deleteBtnWrap} onPress={props.onDeletePhoto}>
            <View style={styles.deleteBtn}>
              <IconEntypo name='cross' size={20} color='#3C2C3E' />
            </View>
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={[
            styles.onLoadContainer,
            { width: props.photoUiWidth, height: props.photoUiHeight },
          ]}
          onPress={props.onLoadPhoto}>
          <View style={styles.onLoadBtnWrap}>
            <IconEntypo name='plus' size={50} color='#82A284' />
          </View>
        </Pressable>
      )}
      {props.photo && (
        <Pressable style={styles.uploadBtn} onPress={props.onUploadPhoto}>
          <Text>Upload</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 70,
  },
  loadingContainer: {
    position: 'absolute',
    opacity: 0.9,
    backgroundColor: '#fff',
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onLoadContainer: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F2D1D1',
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onLoadBtnWrap: {
    opacity: 0.5,
    width: 110,
    height: 110,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 15,
  },
  deleteBtnWrap: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  deleteBtn: {
    width: 26,
    height: 26,
    backgroundColor: '#FFF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  uploadBtn: {
    backgroundColor: '#525E75',
    borderRadius: 10,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  progressBarBox: {
    width: 360,
    height: 60,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#82A284',
  },
  progressBarGauge: {
    height: 58,
    borderRadius: 15,
    backgroundColor: '#00FFAB',
  },
});

export default UploadPresenter;
