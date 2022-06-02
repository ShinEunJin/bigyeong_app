import React, {useRef, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
  Pressable,
  Easing,
  ImageSourcePropType,
  ImageURISource,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

import Header from '@/components/Header';
import Search from '@/components/Search';
import {TEST_DATA} from '../../constants/test';

interface TestDataType {
  url: any;
  id: number;
}

const MainPresenter = () => {
  const mainImageAnim = useRef(new Animated.Value(0)).current;

  const scrollMainImage = (height: number) => {
    Animated.timing(mainImageAnim, {
      toValue: height,
      duration: 250,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const [img, setImg] = useState<ImageSourcePropType>();

  return (
    <View style={{flex: 1}}>
      {/* header */}
      <Header />
      {/* sub-header */}
      <View style={styles.subHeader}>
        <View style={styles.categoryContainer}>
          <Text style={[styles.categoryStyle, {backgroundColor: '#cdcdcd'}]}>
            거리
          </Text>
          <Text style={styles.categoryStyle}>인기</Text>
          <Text style={styles.categoryStyle}>신규</Text>
        </View>
        <View style={styles.subHeaderBreakerLine}></View>
        <Search />
      </View>
      {/* main image */}
      <Animated.View
        style={{
          width: '100%',
          top: 120,
          backgroundColor: '#fff',
          height: mainImageAnim,
          position: 'absolute',
          zIndex: 3,
          overflow: 'hidden',
        }}>
        <Pressable
          style={{
            width: '100%',
            height: '100%',
            paddingTop: 20,
            alignItems: 'center',
          }}
          onPress={() => {
            scrollMainImage(0);
          }}>
          <Image
            source={img}
            style={{
              width: '92%',
              height: Dimensions.get('window').height - 200,
              borderRadius: 30,
              marginBottom: 10,
            }}
          />
          <IconEntypo name="menu" color="#c9c9c9" size={36} />
        </Pressable>
      </Animated.View>
      <ScrollView>
        {/* sub images */}
        <View style={styles.subImageContainer}>
          {TEST_DATA.map((item: TestDataType) => (
            <View key={item.id} style={styles.subImageBox}>
              <Pressable
                onPress={() => {
                  setImg(item.url);
                  scrollMainImage(Dimensions.get('window').height - 120);
                }}>
                <Image source={item.url} style={styles.subImageStyle} />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#ececec',
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  categoryStyle: {
    backgroundColor: '#e9e9e9',
    fontSize: 14,
    color: '#000',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 15,
    marginRight: 20,
  },
  subHeaderBreakerLine: {
    width: 1,
    height: 40,
    backgroundColor: '#e8e8e8',
  },
  sliderCountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    width: 50,
  },
  sliderCountStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#7b7b7b',
  },
  subImageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  subImageBox: {
    marginBottom: 20,
  },
  subImageStyle: {
    width: 180,
    height: 240,
    borderRadius: 15,
  },
});

export default MainPresenter;
