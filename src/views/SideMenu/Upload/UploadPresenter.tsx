import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
  title: string;
  location: string;
  detailLocation: string;
  description: string;
  category: null | 'TORIDE' | 'TODEST';
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setDetailLocation: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<'TORIDE' | 'TODEST' | null>>;
}

const UploadPresenter = (props: UploadProps) => {
  const { width: screenW, height: screenH } = Dimensions.get('screen');

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={props.setTitle}
          value={props.title}
          placeholder='title'
          placeholderTextColor='#C499BA'
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={props.setLocation}
          value={props.location}
          placeholder='location'
          placeholderTextColor='#C499BA'
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={props.setDetailLocation}
          value={props.detailLocation}
          placeholder='detailLocation'
          placeholderTextColor='#C499BA'
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={props.setDescription}
          value={props.description}
          placeholder='description'
          placeholderTextColor='#C499BA'
        />
        <View style={styles.categoryInputContainer}>
          <Pressable onPress={() => props.setCategory('TODEST')}>
            <Text
              style={[
                styles.categoryInputText,
                { opacity: props.category === 'TODEST' ? 1 : 0.3 },
              ]}>
              ToDest
            </Text>
          </Pressable>
          <Pressable onPress={() => props.setCategory('TORIDE')}>
            <Text
              style={[
                styles.categoryInputText,
                { opacity: props.category === 'TORIDE' ? 1 : 0.3 },
              ]}>
              ToRide
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 50,
  },
  loadingContainer: {
    flex: 1,
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
  textInputStyle: {
    elevation: 1,
    color: '#000',
    width: 200,
    height: 50,
    paddingLeft: 10,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  categoryInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  categoryInputText: {
    padding: 10,
    backgroundColor: '#DCD7C9',
    borderRadius: 5,
    color: '#3F4E4F',
  },
});

export default UploadPresenter;
