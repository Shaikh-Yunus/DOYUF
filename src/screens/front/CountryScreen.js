import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import Images from '../../assets/images/Images';
import GlobalStyles from '../../shared/GlobalStyles';
import Header from '../../components/Header';
import Constant from '../../shared/Constant';
import { useNavigation } from '@react-navigation/native'
const CountryScreen = () => {
    const navigation = useNavigation()
  const data = [
    {id: 1, name: 'UAE', flag: Images.uaeFlag},
    {id: 2, name: 'UAE', flag: Images.uaeFlag},
    {id: 3, name: 'UAE', flag: Images.uaeFlag},
    {id: 4, name: 'UAE', flag: Images.uaeFlag},
    {id: 5, name: 'UAE', flag: Images.uaeFlag},
    {id: 6, name: 'UAE', flag: Images.uaeFlag},
    {id: 7, name: 'UAE', flag: Images.uaeFlag},
    {id: 8, name: 'UAE', flag: Images.uaeFlag},
    {id: 9, name: 'UAE', flag: Images.uaeFlag},
    // Add more country objects here
  ];
  const handleNavigation = () => {
    navigation.navigate('CategoryScreen')
  };
  const renderItem = ({item}) => (
    <Pressable onPress={handleNavigation} style={styles.item}>
      <Image source={item.flag} style={styles.flag} />
      <Text style={styles.countryName}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={GlobalStyles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    padding: 8,
    borderRadius: 8,
  },
  flag: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  countryName: {
    color: Constant.colors.textColor,
    fontSize: 16,
    fontFamily: Constant.fontFamily,
  },
});

export default CountryScreen;
