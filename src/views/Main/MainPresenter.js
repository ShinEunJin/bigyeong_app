import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

import Header from '@/components/Header';
import Search from '@/components/Search';

const MainPresenter = () => {
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
      <ScrollView style={styles.subImageContainer}>
        <View style={styles.mainImageContainer}>
          <Image
            style={styles.mainImage}
            source={require(`@/assets/images/korea3.jpeg`)}
          />
          <View style={styles.descriptionBox}>
            <Text style={{color: '#606060', fontWeight: 'bold'}}>남산</Text>
            <Text style={{color: '#939393'}}>서울 중구 회현동 1가</Text>
          </View>
          <View style={styles.sliderCountBox}>
            <View style={styles.sliderCountStyle}></View>
            <IconEntypo name="circle" size={10} color="#939393" />
            <IconEntypo name="circle" size={10} color="#939393" />
            <IconEntypo name="circle" size={10} color="#939393" />
          </View>
        </View>
        {/* sub images */}
        <View style={styles.subImageBox}>
          <Image
            source={require('@/assets/images/korea1.jpeg')}
            style={styles.subImageStyle}
          />
          <Image
            source={require('@/assets/images/korea2.jpeg')}
            style={styles.subImageStyle}
          />
        </View>
        <View style={styles.subImageBox}>
          <Image
            source={require('@/assets/images/korea4.jpeg')}
            style={styles.subImageStyle}
          />
          <Image
            source={require('@/assets/images/korea5.jpeg')}
            style={styles.subImageStyle}
          />
        </View>
        <View style={styles.subImageBox}>
          <Image
            source={require('@/assets/images/korea6.jpeg')}
            style={styles.subImageStyle}
          />
          <Image
            source={require('@/assets/images/korea7.jpeg')}
            style={styles.subImageStyle}
          />
        </View>
        <View style={styles.subImageBox}>
          <Image
            source={require('@/assets/images/korea8.jpeg')}
            style={styles.subImageStyle}
          />
          <Image
            source={require('@/assets/images/korea9.jpeg')}
            style={styles.subImageStyle}
          />
        </View>
        <View style={styles.subImageBox}>
          <Image
            source={require('@/assets/images/korea10.jpeg')}
            style={styles.subImageStyle}
          />
          <Image
            source={require('@/assets/images/korea11.jpeg')}
            style={styles.subImageStyle}
          />
        </View>
        <View style={styles.subImageBox}>
          <Image
            source={require('@/assets/images/korea12.jpeg')}
            style={styles.subImageStyle}
          />
          <Image
            source={require('@/assets/images/korea13.jpeg')}
            style={styles.subImageStyle}
          />
        </View>
        <View style={styles.subImageBox}>
          <Image
            source={require('@/assets/images/korea14.jpeg')}
            style={styles.subImageStyle}
          />
          <Image
            source={require('@/assets/images/korea15.jpeg')}
            style={styles.subImageStyle}
          />
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
  mainImageContainer: {
    paddingHorizontal: 20,
    position: 'relative',
    height: 360,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingBottom: 10,
  },
  mainImage: {
    width: 350,
    height: 260,
    borderRadius: 25,
    resizeMode: 'stretch',
    marginRight: 15,
  },
  descriptionBox: {
    width: 300,
    height: 80,
    backgroundColor: '#e7e7e7',
    elevation: 1,
    borderRadius: 25,
    position: 'absolute',
    zIndex: -2,
    bottom: 30,
    right: 20,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 25,
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
    marginBottom: 30,
  },
  subImageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  subImageStyle: {
    width: 180,
    height: 200,
    borderRadius: 15,
  },
});

export default MainPresenter;
