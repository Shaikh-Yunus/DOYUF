import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding1 from '../screens/front/OnBoarding1';
import LanguageScreen from '../screens/front/LanguageScreen';
import CategoryScreen from '../screens/front/CategoryScreen';
import CountryScreen from '../screens/front/CountryScreen';
import BottomTabStack from './BottomTabStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding1"
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
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="CountryScreen" component={CountryScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
