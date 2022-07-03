import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerBox}>
      <View style={styles.logoBox}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logoStyle}
        />
        <Text style={styles.logoFontStyle}>BIGYEONG</Text>
      </View>
      <Pressable
        style={styles.menuBtnWrap}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <IconFeather color='#000' name='menu' size={30} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#F6FBF4',
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
  menuBtnWrap: {
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default Header;
