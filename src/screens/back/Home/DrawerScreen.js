import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../../../shared/GlobalStyles';
import BackHeader from '../../../components/BackHeader';
import Constant from '../../../shared/Constant';
import {Dropdown} from 'react-native-element-dropdown';
import DrawerHeader from '../../../components/DrawerHeader';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({text}) => {
  return (
    <View style={styles.button}>
      <Text style={{color: Constant.colors.textColor, fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
};
const CustomButtonTwo = () => {
  return (
    <View style={styles.buttonTwo}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>Exclusive</Text>
    </View>
  );
};
const DrawerNavButtons = ({text, destination}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(destination);
  };
  return (
    <TouchableOpacity style={styles.navButtons} onPress={handlePress}>
      <Text style={styles.navButtonText}>{text}</Text>
      <View
        style={{
          marginTop: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: 'lightgrey',
        }}></View>
    </TouchableOpacity>
  );
};
const DrawerScreen = () => {
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination);
  };
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const dataTwo = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [valueTwo, setValueTwo] = useState(null);
  const [isFocusTwo, setIsFocusTwo] = useState(false);

  return (
    <View style={GlobalStyles.container}>
      <DrawerHeader />
      <ScrollView style={GlobalStyles.wrapper}>
        <View>
          <Text
            style={{
              color: Constant.colors.primaryColor,
              fontFamily: Constant.fontFamily,
            }}>
            HOME
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            borderBottomWidth: 2,
            borderBottomColor: Constant.colors.primaryColor,
          }}></View>

        <View style={styles.container}>
          <View style={styles.row}>
            <CustomButton text="Women" />
            <CustomButton text="Men" />
          </View>

          <View style={styles.row}>
            <CustomButton text="Shoes" />
            <CustomButtonTwo />
          </View>
        </View>

        <View>
          <DrawerNavButtons
            onPress={handlePress}
            destination="AboutScreen"
            text="ABOUT"
          />
          <DrawerNavButtons text="ACCOUNT" />
          <DrawerNavButtons text="ORDERS" />
          <DrawerNavButtons
            onPress={handlePress}
            destination="ContactScreen"
            text="CONTACT"
          />
          <DrawerNavButtons
            text="KIDS"
            onPress={handlePress}
            destination="RenderProducts"
          />
          <DrawerNavButtons
            onPress={handlePress}
            destination="RenderProducts"
            text="OFFERS"
          />
          <DrawerNavButtons text="العربية" />
          <DrawerNavButtons text="TRACK YOUR ORDERS" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={styles.headingDropdown}>DOYUF GLOBAL</Text>
          <Text style={styles.headingDropdown}>DOYUF INTERNATIONAL</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            // flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={styles.Dropdowncontainer}>
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Country' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.Dropdowncontainer}>
            <Dropdown
              style={[styles.dropdown, isFocusTwo && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dataTwo}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocusTwo ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocusTwo(true)}
              onBlur={() => setIsFocusTwo(false)}
              onChange={item => {
                setValueTwo(item.value);
                setIsFocusTwo(false);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  //   container: {
  //     // flex: 1,
  //     // justifyContent: 'center',
  //     // alignItems: 'center',
  //   },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightgrey',
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  buttonTwo: {
    alignSelf: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: '47%',
  },
  navButtons: {
    marginTop: 10,
  },
  navButtonText: {
    color: Constant.colors.textColor,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  headingDropdown: {
    fontWeight: 'bold',
    color: Constant.colors.textColor,
  },
  //drawer
  Dropdowncontainer: {
    backgroundColor: 'white',
    paddingVertical: 16,
    // flex:2
  },
  dropdown: {
    // flex:2,
    height: 50,
    width: 150,
    borderColor: 'gray',
    backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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
