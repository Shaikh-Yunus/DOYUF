import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Images from '../assets/images/Images';
import Constant from '../shared/Constant';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import LoginScreen from '../screens/front/LoginScreen';
import RegisterScreen from '../screens/front/RegisterScreen';

const DrawerHeader = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.goBack();
  };
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
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
        </View>
      </View>
    );
  };
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

  // cart model

  //  open login model
  const [loginmodelvisible, setloginmodelvisible] = useState(false);

  const openloginmodel = () => {
    setloginmodelvisible(true);
    setModalVisible(false);
  };

  const closeloginmodel = () => {
    setloginmodelvisible(false);
  };

  //  open login model

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
          <Feather
            onPress={openModal}
            style={styles.icon}
            name="user"
            size={25}
            color="black"
          />
          <Feather style={styles.icon} name="heart" size={25} color="black" />
          <Ionicons
            onPress={opencartModal}
            style={styles.icon}
            name="cart-outline"
            size={25}
            color="black"
          />
        </View>
      </View>
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
                    color: '#D7B97B',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: Constant.fontFamily,
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={openregistrationmodel}
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
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 8,
                  marginBottom: 8,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Feather name="user" size={20} color="#000" />
                  <Text style={{color: '#000000', marginLeft: 15}}>
                    My Account
                  </Text>
                </View>
                <AntDesign
                  name="right"
                  size={15}
                  color="#000"
                  style={styles.modeliconarrow}
                />
              </View>

              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 1,
                  width: 248,
                }}></View>
              <View
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
                  <Text style={{color: '#000000', marginLeft: 15}}>
                    My Orders
                  </Text>
                </View>
                <AntDesign
                  name="right"
                  size={15}
                  color="#000"
                  style={styles.modeliconarrow}
                />
              </View>

              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 1,
                  width: 248,
                }}></View>
              <View
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
                  <Text style={{color: '#000000', marginLeft: 15}}>
                    My Wishlist
                  </Text>
                </View>
                <AntDesign
                  name="right"
                  size={15}
                  color="#000"
                  style={styles.modeliconarrow}
                />
              </View>

              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 1,
                  width: 248,
                }}></View>
              <View
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
                  <Text style={{color: '#000000', marginLeft: 15}}>
                    Return Policy
                  </Text>
                </View>
                <AntDesign
                  name="right"
                  size={15}
                  color="#000"
                  style={styles.modeliconarrow}
                />
              </View>

              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 1,
                  width: 248,
                }}></View>
              <View
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
                  <Text style={{color: '#000000', marginLeft: 15}}>Logout</Text>
                </View>
                <AntDesign
                  name="right"
                  size={15}
                  color="#000"
                  style={styles.modeliconarrow}
                />
              </View>
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
              <TouchableOpacity style={styles.buttonviewbag}>
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
              <TouchableOpacity style={styles.buttoncheckout}>
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
              height: '70%',
            }}>
            <LoginScreen closeloginmodel={closeloginmodel} />
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
            <RegisterScreen closeregistrationmodel={closeregistrationmodel} />
          </View>
        </View>
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
    borderRadius: 5,
  },
  text: {
    flex: 1,
    marginLeft: 30,
    fontSize: 14,
    color: 'black',
    fontFamily: Constant.fontFamily,
  },
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
    fontFamily: Constant.regular,
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
    borderColor: '#D7B97B',
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
    color: '#4C4C4C',
  },

  // cart model styling

  //  cart list
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 0,
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  brand: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
  price: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
});

export default DrawerHeader;
