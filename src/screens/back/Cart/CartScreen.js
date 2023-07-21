import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import Images from '../../../assets/images/Images';
import GlobalStyles from '../../../shared/GlobalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FrontHead from '../../../components/FrontHead';
import Constant from '../../../shared/Constant';
import BottomTab from '../../../components/BottomTab';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const CartFooter = () => {
  const navigation = useNavigation()
  return (
    <View
      style={
        {
          // padding: 20,
          // marginTop: 10,
        }
      }>
      <View
        style={{
          padding: 20,
          marginTop: 10,
        }}>
        <View style={GlobalStyles.spaceBetweenRow}>
          <Text style={styles.textCartFooter}>SubTotal</Text>
          <Text style={styles.textCartFooter}>AED 15000.53</Text>
        </View>
        <View style={GlobalStyles.spaceBetweenRow}>
          <Text style={styles.textCartFooter}>Shipping Charges</Text>
          <Text style={styles.textCartFooter}>AED 100.53</Text>
        </View>
        <View
          style={{ borderWidth: 0.5, borderColor: 'lightgrey', marginTop: 10 }}></View>
        <View style={[GlobalStyles.spaceBetweenRow, { marginTop: 10 }]}>
          <Text style={styles.textCartFooter}>Total</Text>
          <Text style={styles.textCartFooterBold}>AED 15100.53</Text>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('/Checkout-Screen')}
        style={[
          {
            padding: 15,
            // borderWidth: 0.5,
            marginHorizontal: 20,
            backgroundColor: Constant.colors.primaryColor,
          },
          GlobalStyles.alignMiddle,
        ]}>
        <Text
          style={{
            fontFamily: Constant.AvenirBold,
            // fontWeight: 'bold',
            fontSize: 16,
            color: Constant.colors.whiteColor,
          }}>
          PROCEED TO CHECKOUT
        </Text>
      </Pressable>
    </View>
  );
};

const CartScreen = () => {
  const navigation = useNavigation()
  const cartData = [
    {
      id: 1,
      image: Images.product1,
      p_name: 'ERICA_BEIGE brand',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 2,
      image: Images.product1,
      p_name: 'ERICA_BEIGE',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 3,
      image: Images.product1,
      p_name: 'ERICA_BEIGE',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 4,
      image: Images.product1,
      p_name: 'ERICA_BEIGE',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 5,
      image: Images.product1,
      p_name: 'ERICA_BEIGE',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
  ];
  const data = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={GlobalStyles.container}>
      <FrontHead />
      <View
        style={{
          flex: 1,
          // padding: 20
        }}>
        <View style={[GlobalStyles.wrapper, { height: '70%' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign style={{}} name='left' size={25} color="black" />
            </TouchableOpacity>
            <Text style={{
              flex: 1,
              fontSize: 16,
              color: Constant.colors.textColor,
              // fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: Constant.AvenirBold,
            }}>My Shopping Bag (5 Items)</Text>
          </View>
          <FlatList
            data={cartData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  // backgroundColor: 'pink'
                  // flexWrap: 'wrap'
                }}>
                <View
                  style={{
                    width: 125,
                    height: 125,
                    backgroundColor: 'lightgrey',
                    marginRight: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
                <View >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      // flexWrap: 'wrap',
                    }}>
                    <View style={{}} >
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 16,
                          color: 'black',
                          fontWeight: 'bold',
                          fontFamily: Constant.fontFamily,
                        }}
                      >
                        {item.p_name}

                      </Text>
                      {/* {item.p_name.length > 10
                          ? `${item.p_name.substring(0, 10)}...`
                          : item.p_name} */}
                    </View>
                    <View style={{}}>
                      <Dropdown
                        style={[
                          styles.dropdown,
                          isFocus && { borderColor: 'blue' },
                        ]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        // inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? item.value : '...'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setValue(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        marginVertical: 5,
                        fontSize: 14,
                        color: 'black',
                        fontFamily: Constant.fontFamily,
                      }}>
                      Brand:{' '}
                    </Text>
                    <Text
                      style={{
                        marginVertical: 5,
                        fontSize: 14,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {item.brand}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginVertical: 5,
                      fontSize: 14,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    AED {item.price}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            marginBottom: 15,
          }}>
          <CartFooter />
        </View>
      </View>
    </View >
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  textCartFooter: {
    color: Constant.colors.textColor,
    fontFamily: Constant.fontFamily,
  },
  textCartFooter: {
    color: Constant.colors.textColor,
    // fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
  },
  textCartFooterBold: {
    color: Constant.colors.textColor,
    // fontWeight: 'bold',
    fontFamily: Constant.AvenirBold,
  },
  container: {
    backgroundColor: 'white',
    // padding: 16,
  },
  dropdown: {
    height: 25,
    width: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    // borderRadius: 8,
    paddingHorizontal: 8,
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
    color: 'grey'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'grey'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
