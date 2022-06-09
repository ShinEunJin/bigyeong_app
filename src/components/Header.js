import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <View>
        <IconFeather color="#000" name="menu" size={30} />
      </View>
      <View style={styles.logoBox}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logoStyle}
        />
        <Text style={styles.logoFontStyle}>BIGYEONG</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#ececec',
    paddingHorizontal: 20,
  },
  logoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoStyle: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  logoFontStyle: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Header;
