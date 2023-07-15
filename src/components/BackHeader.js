import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../shared/GlobalStyles';
import Images from '../assets/images/Images';
import Constant from '../shared/Constant';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useIsFocused, useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const BackHeader = ({ disable, onSearch, onPressSearch, defaultView }) => {
  const navigation = useNavigation();

  // profile model 
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // profile model


  const toggleDrawer = () => {
    navigation.navigate('DrawerScreen');
  };
  const handleSearch = text => {
    if (text.trim() === '') {
      onSearch(false);
    } else {
      onSearch(true);
    }
  };

  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Pressable onPress={toggleDrawer} style={{ flex: 1 }}>
          <FontAwesome5 name="bars" size={25} color="black" />
        </Pressable>

        <View style={{ flex: 2 }}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Feather onPress={openModal} style={styles.icon} name="user" size={25} color="black" />
          <Feather style={styles.icon} name="heart" size={25} color="black" />
          <Ionicons
            style={styles.icon}
            name="cart-outline"
            size={25}
            color="black"
          />
        </View>
      </View>

      {disable == true ? (
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderWidth: 0.5,
            borderColor: 'lightgrey',
          }}>
          <View style={styles.searchBar}>
            <AntDesign name="search1" size={20} color="black" />
            <TextInput
              onFocus={onPressSearch}
              onChangeText={handleSearch}
              style={styles.text}
              placeholder="SEARCH PRODUCT..."
            />
            <Pressable onPress={defaultView}>
              <FontAwesome5 name="cross" size={25} color="black" />
            </Pressable>
          </View>
        </View>
      ) : null}



      <Modal visible={modalVisible} transparent>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={0}
          onPress={closeModal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.title}>MY ACCOUNT</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonlogin}>
                <Text style={{ color: '#D7B97B', fontWeight: 'bold', textAlign: 'center', fontFamily: Constant.fontFamily }}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonregistor}>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', fontFamily: Constant.fontFamily, }}>REGESTER</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 185, width: 248, marginTop: 35 }}>

              <View style={{ backgroundColor: '#D9D9D9', height: 1, width: 248, }}></View>
              <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 8, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Feather name="user" size={20} color="#000" />
                  <Text style={{ color: '#000000', marginLeft: 15 }}>My Account</Text>
                </View>
                <AntDesign name='right' size={15} color='#000' style={styles.modeliconarrow} />
              </View>

              <View style={{ backgroundColor: '#D9D9D9', height: 1, width: 248, }}></View>
              <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 8, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Feather style={styles.modelicon} name="menu" size={20} color="#000" />
                  <Text style={{ color: '#000000', marginLeft: 15 }}>My Orders</Text>
                </View>
                <AntDesign name='right' size={15} color='#000' style={styles.modeliconarrow} />

              </View>

              <View style={{ backgroundColor: '#D9D9D9', height: 1, width: 248, }}></View>
              <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 8, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Feather style={styles.modelicon} name="heart" size={20} color="#000" />
                  <Text style={{ color: '#000000', marginLeft: 15 }}>My Wishlist</Text>
                </View>
                <AntDesign name='right' size={15} color='#000' style={styles.modeliconarrow} />

              </View>

              <View style={{ backgroundColor: '#D9D9D9', height: 1, width: 248, }}></View>
              <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 8,justifyContent:'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons style={styles.modelicon} name="keyboard-return" size={20} color="#000" />
                <Text style={{ color: '#000000', marginLeft: 15 }}>Return Policy</Text>
              </View>
              <AntDesign name='right' size={15} color='#000' style={styles.modeliconarrow} />

              </View>

              <View style={{ backgroundColor: '#D9D9D9', height: 1, width: 248, }}></View>
              <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 8 ,justifyContent:'space-between'}}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons style={styles.modelicon} name="logout" size={20} color="#000" />
                <Text style={{ color: '#000000', marginLeft: 15 }}>Logout</Text>
              </View>
              <AntDesign name='right' size={15} color='#000' style={styles.modeliconarrow} />

              </View>

            </View>
          </View>

        </TouchableOpacity>

      </Modal>
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
    marginHorizontal: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    // height: 60,
    backgroundColor: '#fff', // Replace with your desired background color
    borderWidth: 0.5,
    borderWidthColor: 'grey',
    borderRadius: 5,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: 'black',
    fontFamily: Constant.fontFamily,
  },
  //  profile model styling

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 50,
    paddingRight: 0,

  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 293,
    height: 366
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
    fontFamily: Constant.fontFamily
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonlogin: {
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    width: 122,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#D7B97B'

  },
  buttonregistor: {
    justifyContent: 'center',
    backgroundColor: '#D7BA7B',
    // padding: 7,
    borderRadius: 5,
    marginTop: 10,
    width: 122,
    height: 40,
    borderRadius: 5,
  },
  modeliconarrow: {
    // justifyContent: 'flex-end',
    color:'#4C4C4C'

  }

  // profile model styling 
});

export default BackHeader;
