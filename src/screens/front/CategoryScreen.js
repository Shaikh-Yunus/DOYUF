import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import GlobalStyles from '../../shared/GlobalStyles';
import Images from '../../assets/images/Images';
import Constant from '../../shared/Constant';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({text}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('BottomTabStack')
  };
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={[styles.button, GlobalStyles.alignMiddle]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const CategoryScreen = () => {
  return (
    <View style={GlobalStyles.container}>
      <ImageBackground
        source={Images.couple}
        style={GlobalStyles.backgroundImage}>
        <View style={styles.container}>
          <CustomButton text="SHOP WOMEN" />
          <CustomButton text="SHOP MEN" />
          <CustomButton text="SHOP KIDS" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    width: 150,
    marginTop: 15,
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // borderRadius: 8,
  },
  buttonText: {
    color: Constant.colors.textColor,
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
  },
});
