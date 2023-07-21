import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Constant from '../shared/Constant';

const SubHeading = ({text}) => {
  return (
    <View style={{marginTop: 30, flexDirection: 'row'}}>
      <Text
        style={{
          fontWeight: 'bold',
          color: Constant.colors.primaryColor,
          fontSize: 20,
        }}>
        |
      </Text>
      <Text
        style={{
          marginLeft: 10,
          // alignSelf:'center',
          marginTop:3,
          // fontWeight: 'bold',
          color: Constant.colors.textColor,
          fontSize: 18,
          fontFamily: 'AvenirNextLTPro',
        }}>
        {text}
      </Text>
    </View>
  );
};
const SubHeadingSearch = ({text}) => {
  return (
    <View style={{marginTop: 0, flexDirection: 'row'}}>
      <Text
        style={{
          marginLeft: 10,
          fontWeight: 'bold',
          color: Constant.colors.textColor,
          fontSize: 18,
          fontFamily: 'AvenirNextLTPro-Bold',
        }}>
        {text}
      </Text>
    </View>
  );
};

export {SubHeading, SubHeadingSearch};

const styles = StyleSheet.create({});
