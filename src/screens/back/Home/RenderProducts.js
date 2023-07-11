import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../../../assets/images/Images';
import GlobalStyles from '../../../shared/GlobalStyles';
import BackHeader from '../../../components/BackHeader';
import BottomTab from '../../../components/BottomTab';
import Constant from '../../../shared/Constant';

const data = [
  {
    id: 1,
    image: Images.product1,
    madeIn: 'Made in Italia',
    name: 'Product 1',
    price: 4000,
    slashedPrice: 5000,
  },
  {
    id: 2,
    image: Images.product1,
    madeIn: 'Made in Italia',
    name: 'Product 2',
    price: 4000,
    slashedPrice: 5000,
  },
  {
    id: 3,
    image: Images.product1,
    madeIn: 'Made in Italia',
    name: 'Product 2',
    price: 4000,
    slashedPrice: 5000,
  },
  {
    id: 4,
    image: Images.product1,
    madeIn: 'Made in Italia',
    name: 'Product 2',
    price: 4000,
    slashedPrice: 5000,
  },
  {
    id: 5,
    image: Images.product1,
    madeIn: 'Made in Italia',
    name: 'Product 2',
    price: 4000,
    slashedPrice: 5000,
  },
  {
    id: 6,
    image: Images.product1,
    madeIn: 'Made in Italia',
    name: 'Product 2',
    price: 4000,
    slashedPrice: 5000,
  },
  // Add more product data objects here
];

const ProductCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <AntDesign name='hearto' size={25} style={styles.heartIcon} />
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.madeIn}>{item.madeIn}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`₹${item.price}`}</Text>
        <Text style={styles.slashedPrice}>{`₹${item.slashedPrice}`}</Text>
      </View>
    </View>
  );
};



const RenderProducts = () => {
  return (
    <View style={GlobalStyles.container}>
      <BackHeader />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <View>
                <BottomTab />
            </View> */}
    </View>
  );
};

export default RenderProducts;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    // alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'red',
  },
  image: {
    width: 150,
    height: 150,
  },
  madeIn: {
    color: 'black',
    marginTop: 10,
    fontFamily: Constant.fontFamily
  },
  name: {
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily
  },
  slashedPrice: {
    color: 'black',
    marginLeft: 5,
    textDecorationLine: 'line-through',
    fontFamily: Constant.fontFamily
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
