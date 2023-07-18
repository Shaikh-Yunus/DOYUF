import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/back/Home/HomeScreen';
import WishListScreen from '../screens/back/Wishlist/WishListScreen';
import CartScreen from '../screens/back/Cart/CartScreen';
import AccountScreen from '../screens/back/Account/AccountScreen';
import DrawerScreen from '../screens/back/Home/DrawerScreen';
import RenderProducts from '../screens/back/Home/RenderProducts';
import FilterScreen from '../screens/back/Home/FilterScreen';
import AboutScreen from '../screens/back/Home/AboutScreen';
import ReturnPolicyScreen from '../screens/back/ReturnPolicy/ReturnPolicyScreen';
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};
const CustomerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              // Code to close the app
            }}>
            <Text>Close App</Text>
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="RenderProducts" component={RenderProducts} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="/Account-Screen" component={AccountScreen} />
      <Stack.Screen name="/WishList-Screen" component={WishListScreen} />
      <Stack.Screen name="/ReturnPolicy-Screen" component={ReturnPolicyScreen} />

    </Stack.Navigator>
  );
};
const WishListStack = () => {
  return;
  <Stack.Navigator
    initialRouteName="WishListScreen"
    screenOptions={screenOptions}>
    <Stack.Screen name="WishListScreen" component={WishListScreen} />
  </Stack.Navigator>;
};
const CartStack = () => {
  return;
  <Stack.Navigator initialRouteName="CartScreen" screenOptions={screenOptions}>
    <Stack.Screen name="CartScreen" component={CartScreen} />
  </Stack.Navigator>;
};
const AccountStack = () => {
  return;
  <Stack.Navigator
    initialRouteName="AccountScreen"
    screenOptions={screenOptions}>
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
  </Stack.Navigator>;
};

export {CustomerStack, WishListStack, CartStack, AccountStack};

const styles = StyleSheet.create({});
