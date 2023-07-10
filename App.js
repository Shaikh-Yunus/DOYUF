import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoarding1 from './src/screens/front/OnBoarding1'
import OnBoarding2 from './src/screens/front/OnBoarding2'
import LoginScreen from './src/screens/front/LoginScreen'
import RegisterScreen from './src/screens/front/RegisterScreen'
import OTPScreen from './src/screens/front/OTPScreen'
import LanguageScreen from './src/screens/front/LanguageScreen'
import CountryScreen from './src/screens/front/CountryScreen'
import CategoryScreen from './src/screens/front/CategoryScreen'
import HomeScreen from './src/screens/back/Home/HomeScreen'
import BackHeader from './src/components/BackHeader'
import BottomTab from './src/components/BottomTab'
import RenderProducts from './src/screens/back/Home/RenderProducts'
import FrontHead from './src/components/FrontHead'
import CartScreen from './src/screens/back/Cart/CartScreen'
import WishListScreen from './src/screens/back/Wishlist/WishListScreen'
import AccountScreen from './src/screens/back/Account/AccountScreen'
import { CustomerStack, WishListStack, CartStack, AccountStack } from './src/navigation/CustomerStack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabStack from './src/navigation/BottomTabStack'
import DrawerScreen from './src/screens/back/Home/DrawerScreen'

const App = () => {
  return (
    <NavigationContainer>
      {/* <CustomerStack /> */}
      <BottomTabStack />
      {/* <DrawerScreen /> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})