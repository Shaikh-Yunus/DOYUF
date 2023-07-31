import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../shared/GlobalStyles';
import Images from '../assets/images/Images';
import Constant from '../shared/Constant';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useIsFocused, useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import LoginScreen from '../screens/front/LoginScreen';
import RegisterScreen from '../screens/front/RegisterScreen';
import ForgotPassword from '../screens/front/ForgotPassword';
import {Dropdown} from 'react-native-element-dropdown';
import OTPScreen from '../screens/front/OTPScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

const BackHeader = ({disable, onSearch, onPressSearch, defaultView}) => {
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

  // Cart model
  const [cartmodalVisible, setcartModalVisible] = useState(false);

  const opencartModal = () => {
    setcartModalVisible(true);
  };

  const closecartModal = () => {
    setcartModalVisible(false);
  };
  //  open login model
  const [loginmodelvisible, setloginmodelvisible] = useState(false);

  const openloginmodel = () => {
    setloginmodelvisible(true);
    setModalVisible(false);
  };

  const closeloginmodel = () => {
    setloginmodelvisible(false);
  };
  // open Registration model
  const [registrationmodelvisible, setregistrationmmodelvisible] =
    useState(false);
  const openregistrationmodel = () => {
    setregistrationmmodelvisible(true);
    setModalVisible(false);
  };
  const closeregistrationmodel = () => {
    setregistrationmmodelvisible(false);
  };
  // open Forgot password model
  const [forgotPasswordmodelvisible, setforgotPasswordvisible] =
    useState(false);
  const openforgotPasswordmodel = () => {
    setforgotPasswordvisible(true);
    setModalVisible(false);
  };
  const closeforgotPasswordmodel = () => {
    setforgotPasswordvisible(false);
  };
  // open otp model
  const [otpmodelvisible, setOtpModelVisible] =
    useState(false);
  const openOtpModelVisible = () => {
    setOtpModelVisible(true);
    setModalVisible(false);
  };
  const closeOtpModelVisible = () => {
    setOtpModelVisible(false);
  };
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
  // dropdown
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ];
  const products = [
    {
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Product 1',
      brand: 'Made in XYZ',
      price: 19.99,
    },
    {
      image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Product 2',
      brand: 'Made in XYZ',
      price: 29.99,
    },
    {
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Product 3',
      brand: 'Made in XYZ',
      price: 39.99,
    },
    // Add more products as needed
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.productInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={{}}>
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                // placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                // inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? item.value : '...'}
                // value={value}
                value={data[0].value} // Set the value to the value of the first item in the
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <Text style={styles.brand}>Brand: {item.brand}</Text>
          <Text style={styles.price}>₹ {item.price}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Pressable onPress={closecartModal}>
        <View style={styles.HeaderContainer}>
          <Pressable onPress={toggleDrawer} style={{flex: 1}}>
            <FontAwesome5 name="bars" size={25} color="black" />
          </Pressable>

          <View style={{flex: 2}}>
            <Image
              source={Images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Feather
                onPress={openModal}
                style={styles.icon}
                name="user"
                size={25}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                onPress={() => navigation.navigate('/WishList-Screen')}
                style={styles.icon}
                name="heart"
                size={25}
                color="black"
              />
            </TouchableOpacity>
            <Ionicons
              onPress={opencartModal}
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
                placeholderTextColor={'grey'}
              />
              <Pressable onPress={defaultView}>
                <FontAwesome name="close" size={20} color="black" />
              </Pressable>
            </View>
          </View>
        ) : null}

        <Modal visible={modalVisible} transparent>
          <View
            style={styles.modalContainer}
            // activeOpacity={0}
            // onPress={closeModal}
          >
            <View style={styles.modalContent}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>MY ACCOUNT</Text>
                <FontAwesome
                  onPress={closeModal}
                  name="close"
                  color="#000"
                  size={20}
                />
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={openloginmodel}
                  style={styles.buttonlogin}>
                  <Text
                    style={{
                      color: Constant.colors.primaryColor,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: Constant.fontFamily,
                    }}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openregistrationmodel}
                  // onPress={openOtpModelVisible}
                  style={styles.buttonregistor}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: Constant.fontFamily,
                    }}>
                    REGISTER
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{height: 185, width: 248, marginTop: 35}}>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    height: 1,
                    width: 248,
                  }}></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('/Account-Screen')}
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                    marginBottom: 8,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Feather name="user" size={20} color="#000" />
                    <Text
                      style={{
                        color: '#000000',
                        marginLeft: 15,
                        fontFamily: Constant.fontFamily,
                      }}>
                      My Account
                    </Text>
                  </View>
                  <AntDesign
                    name="right"
                    size={15}
                    color="#000"
                    style={styles.modeliconarrow}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    height: 1,
                    width: 248,
                  }}></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('/Account-Screen', {})}
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                    marginBottom: 8,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Feather
                      style={styles.modelicon}
                      name="menu"
                      size={20}
                      color="#000"
                    />
                    <Text
                      style={{
                        color: '#000000',
                        marginLeft: 15,
                        fontFamily: Constant.fontFamily,
                      }}>
                      My Orders
                    </Text>
                  </View>
                  <AntDesign
                    name="right"
                    size={15}
                    color="#000"
                    style={styles.modeliconarrow}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    height: 1,
                    width: 248,
                  }}></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('/WishList-Screen')}
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                    marginBottom: 8,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Feather
                      style={styles.modelicon}
                      name="heart"
                      size={20}
                      color="#000"
                    />
                    <Text
                      style={{
                        color: '#000000',
                        marginLeft: 15,
                        fontFamily: Constant.fontFamily,
                      }}>
                      My Wishlist
                    </Text>
                  </View>
                  <AntDesign
                    name="right"
                    size={15}
                    color="#000"
                    style={styles.modeliconarrow}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    height: 1,
                    width: 248,
                  }}></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('/ReturnPolicy-Screen')}
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                    marginBottom: 8,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons
                      style={styles.modelicon}
                      name="keyboard-return"
                      size={20}
                      color="#000"
                    />
                    <Text
                      style={{
                        color: '#000000',
                        marginLeft: 15,
                        fontFamily: Constant.fontFamily,
                      }}>
                      Return Policy
                    </Text>
                  </View>
                  <AntDesign
                    name="right"
                    size={15}
                    color="#000"
                    style={styles.modeliconarrow}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    height: 1,
                    width: 248,
                  }}></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                    marginBottom: 8,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons
                      style={styles.modelicon}
                      name="logout"
                      size={20}
                      color="#000"
                    />
                    <Text
                      style={{
                        color: '#000000',
                        marginLeft: 15,
                        fontFamily: Constant.fontFamily,
                      }}>
                      Logout
                    </Text>
                  </View>
                  <AntDesign
                    name="right"
                    size={15}
                    color="#000"
                    style={styles.modeliconarrow}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* cart model   */}
        <Modal visible={cartmodalVisible} transparent>
          <View
            style={styles.modalcartContainer}
            // activeOpacity={0}
            // onPress={closecartModal}
          >
            <View style={styles.modalcartContent}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.cartmodeltitle}>MY BASKET</Text>
                <FontAwesome
                  onPress={closecartModal}
                  name="close"
                  color="#000"
                  size={20}
                />
              </View>

              <View style={{height: 257, width: 278, marginTop: 35}}>
                <ScrollView>
                  <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                  />
                </ScrollView>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontFamily: Constant.fontFamily,
                    fontWeight: '700',
                    color: '#000',
                    fontSize: 16,
                  }}>
                  Subtotal
                </Text>
                <Text
                  style={{
                    fontFamily: Constant.fontFamily,
                    fontWeight: '700',
                    color: '#000',
                    fontSize: 16,
                  }}>
                  ₹16118.53
                </Text>
              </View>
              <View style={styles.buttoncartContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('/Cart-Screen'), closecartModal;
                  }}
                  style={styles.buttonviewbag}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: Constant.fontFamily,
                    }}>
                    VIEW BAG
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('/Checkout-Screen'), closecartModal();
                  }}
                  style={styles.buttoncheckout}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: Constant.fontFamily,
                    }}>
                    CHECKOUT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* cart model   */}

        {/* login model */}

        <Modal visible={loginmodelvisible} animationType="slide" transparent>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // paddingTop: 0,
              // paddingRight: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 20,
                width: '100%',
                height: '70%',
              }}>
              <LoginScreen
                closeloginmodel={closeloginmodel}
                openregistrationmodel={openregistrationmodel}
                openforgotPasswordmodel={openforgotPasswordmodel}
              />
            </View>
          </View>
        </Modal>
        {/* login model */}

        {/* Registration model */}

        <Modal
          visible={registrationmodelvisible}
          animationType="slide"
          transparent>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              // alignItems: 'center',
              // paddingTop: 0,
              // paddingRight: 0,
              // backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 20,
                width: '100%',
                height: '95%',
              }}>
              <RegisterScreen
                closeregistrationmodel={closeregistrationmodel}
                openloginmodel={openloginmodel}
              />
            </View>
          </View>
        </Modal>
        {/* Registration model */}

        {/* Forgot Password modal */}
        <Modal
          visible={forgotPasswordmodelvisible}
          animationType="slide"
          transparent>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 0,
              paddingRight: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 20,
                width: '100%',
                height: '90%',
              }}>
              <ForgotPassword
                closeforgotPasswordmodel={closeforgotPasswordmodel}
                openloginmodel={openloginmodel}
              />
            </View>
          </View>
        </Modal>
        {/* otp modal */}
        <Modal
          visible={otpmodelvisible}
          animationType="slide"
          transparent>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 0,
              paddingRight: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 20,
                width: '100%',
                height: '55%',
              }}>
              <OTPScreen
                closeOtpModelVisible={closeOtpModelVisible}
                openOtpModelVisible={openOtpModelVisible}
              />
            </View>
          </View>
        </Modal>

      </Pressable>
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
    borderColor: 'grey',
    borderRadius: 5,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: 'black',
    fontFamily: Constant.medium,
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
    height: 366,
  },
  title: {
    color: '#000',
    fontSize: 18,
    // fontWeight: '800',
    marginBottom: 10,
    fontFamily: Constant.fontFamily,
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
    borderColor: Constant.colors.primaryColor,
  },
  buttonregistor: {
    justifyContent: 'center',
    backgroundColor: Constant.colors.primaryColor,
    // padding: 7,
    borderRadius: 5,
    marginTop: 10,
    width: 122,
    height: 40,
    borderRadius: 5,
  },
  modeliconarrow: {
    // justifyContent: 'flex-end',
    color: '#4C4C4C',
  },

  // profile model styling

  // cart model styling
  modalcartContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 50,
    paddingRight: 0,
  },
  modalcartContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 320,
    height: 433,
  },
  cartmodeltitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
    fontFamily: Constant.fontFamily,
  },
  buttoncartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonviewbag: {
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    width: 122,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#000',
  },
  buttoncheckout: {
    justifyContent: 'center',
    backgroundColor: Constant.colors.primaryColor,
    // padding: 7,
    borderRadius: 5,
    marginTop: 10,
    width: 122,
    height: 40,
    borderRadius: 5,
  },
  modeliconarrow: {
    // justifyContent: 'flex-end',
    color: '#4C4C4C',
  },

  // cart model styling

  //  cart list
  productContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 0,
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
    // justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    // textAlign: 'center',
    color: '#000',
  },
  brand: {
    fontSize: 14,
    // textAlign: 'center',
    color: '#000',
    marginVertical:10,
  },
  price: {
    fontSize: 14,
    fontFamily:Constant.fontFamily,
    fontWeight:'700',
    // textAlign: 'center',
    color: '#000',
  },
  // cart list
  //dropdown
  dropdown: {
    height: 20,
    width: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    // borderRadius: 8,
    paddingHorizontal: 7,
    // marginLeft: 30
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'grey',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'grey',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    // height: 40,
    // fontSize: 16,
  },
});

export default BackHeader;
