import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../assets/images/Images';
import GlobalStyles from '../../../shared/GlobalStyles';
import FrontHead from '../../../components/FrontHead';
import Constant from '../../../shared/Constant';
import BottomTab from '../../../components/BottomTab';
import {Dropdown} from 'react-native-element-dropdown';

const CartFooter = () => {
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
          <Text style={styles.textCartFooter}>SubTotal</Text>
        </View>
        <View style={GlobalStyles.spaceBetweenRow}>
          <Text style={styles.textCartFooter}>Shipping Charges</Text>
          <Text style={styles.textCartFooter}>Free</Text>
        </View>
        <View
          style={{borderWidth: 0.5, borderColor: 'grey', marginTop: 10}}></View>
        <View style={[GlobalStyles.spaceBetweenRow, {marginTop: 10}]}>
          <Text style={styles.textCartFooterBold}>Total</Text>
          <Text style={styles.textCartFooterBold}>AED 16118.53</Text>
        </View>
      </View>
      <View
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
            fontFamily: Constant.fontFamily,
            fontWeight: 'bold',
            fontSize: 20,
            color: Constant.colors.whiteColor,
          }}>
          PROCEED TO CHECKOUT
        </Text>
      </View>
    </View>
  );
};

const CartScreen = () => {
  const cartData = [
    {
      id: 1,
      image: Images.product1,
      p_name: 'ERICA_BEIGE',
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
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={GlobalStyles.container}>
      <FrontHead text="My Shopping Bag (5 Items)" />
      <View
        style={{
          flex: 1,
          // padding: 20
        }}>
        <View style={[GlobalStyles.wrapper, {height: '70%'}]}>
          <FlatList
            data={cartData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  // backgroundColor: 'pink'
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
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{}}>
                      <Text
                        style={{
                          marginVertical: 5,
                          fontSize: 16,
                          color: 'black',
                          fontWeight: 'bold',
                          fontFamily: Constant.fontFamily,
                        }}>
                        {item.p_name.length > 10
                          ? `${item.p_name.substring(0, 10)}...`
                          : item.p_name}
                      </Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Dropdown
                        style={[
                          styles.dropdown,
                          isFocus && {borderColor: 'blue'},
                        ]}
                        // placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        // placeholder={!isFocus ? 'Select item' : '...'}
                        // searchPlaceholder="Search..."
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
                  <View style={{flexDirection: 'row'}}>
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
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  textCartFooter: {
    color: Constant.colors.textColor,
    fontFamily: Constant.fontFamily,
  },
  textCartFooterBold: {
    color: Constant.colors.textColor,
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
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
  },
  selectedTextStyle: {
    fontSize: 16,
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
