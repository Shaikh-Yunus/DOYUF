import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../../../shared/GlobalStyles';
import FrontHead from '../../../components/FrontHead';
import Images from '../../../assets/images/Images';
import Constant from '../../../shared/Constant';
import Button from '../../../components/Button';
import BottomTab from '../../../components/BottomTab';
import ScreenHeading from '../../../components/ScreenHeading';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
const WishListScreen = () => {
  const navigation = useNavigation();
  const wishlistData = [
    {
      id: 1,
      image: Images.product1,
      p_name: 'Erica_beige',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 2,
      image: Images.product1,
      p_name: 'Erica_beige',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 3,
      image: Images.product1,
      p_name: 'Erica_beige',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 4,
      image: Images.product1,
      p_name: 'Erica_beige',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
    {
      id: 5,
      image: Images.product1,
      p_name: 'Erica_beige',
      brand: 'Made in Italia',
      price: '7417.53',
      qty: 2,
    },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ];
  return (
    <View style={GlobalStyles.container}>
      <FrontHead />

      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <ScreenHeading text="Home / My Wishlist" />
      </View>

      <View
        style={{
          flex: 1,
          //   padding: 20
        }}>
        <View style={[GlobalStyles.wrapper, {height: '80%'}]}>
          <FlatList
            data={wishlistData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  marginBottom: 10,
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
                <View style={{flex: 1}}>


                  <View
                    style={{
                      flexDirection: 'row',
                    //   justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: Constant.fontFamily,
                      }}>
                      {item.p_name}
                    </Text>
                    <View
                      style={{
                        marginLeft:30
                      }}>
                      <Dropdown
                        style={[
                          styles.dropdown,
                          isFocus && {borderColor: 'blue'},
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

                    <AntDesign name="delete" color="black" size={20} />
                  </View>

                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontFamily: Constant.fontFamily,
                      marginVertical: 25,
                    }}>
                    Brand: {item.brand}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontWeight: 'bold',
                      fontFamily: Constant.fontFamily,
                    }}>
                    ₹ {item.price}
                  </Text>


                </View>
              </View>
            )}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View
            style={[
              {
                borderWidth: 0.5,
              },
            ]}>
            <Text style={styles.buttonText}>CLEAR WISHLIST</Text>
          </View>
          <View
            style={[
              {
                backgroundColor: Constant.colors.primaryColor,
              },
            ]}>
            <Text style={styles.buttonTextWhite}>ADD ALL TO CART</Text>
          </View>
        </View>
      </View>
      {/* <BottomTab /> */}
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  buttonText: {
    // fontWeight: 'bold',
    fontSize: 12,
    color: Constant.colors.textColor,
    padding: 15,
    fontFamily: Constant.AvenirBold,
  },
  buttonTextWhite: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Constant.colors.whiteColor,
    padding: 15,
    fontFamily: Constant.fontFamily,
  },
  dropdown: {
    height: 25,
    width: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 5,
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
    height: 40,
    fontSize: 16,
  },
});
