import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../assets/images/Images';
import Constant from '../shared/Constant';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const DrawerHeader = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Pressable onPress={toggleDrawer} style={{flex: 1}}>
          <AntDesign name="close" size={25} color="black" />
        </Pressable>

        <View style={{flex: 2}}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={Images.profileIcon}
            style={styles.icon}
            resizeMode="contain"
          />
          <Image
            source={Images.heartIcon}
            style={styles.icon}
            resizeMode="contain"
          />
          <Image
            source={Images.cartIcon}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: '#fff', // Replace with your desired background color
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'grey'
  },
  logo: {
    height: 60,
    width: 150,
    resizeMode: 'contain',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginHorizontal: 7,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    // height: 60,
    backgroundColor: '#fff', // Replace with your desired background color
    borderWidth: 0.5,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    marginLeft: 30,
    fontSize: 14,
    color: 'black',
    fontFamily: Constant.fontFamily,
  },
});

export default DrawerHeader;
