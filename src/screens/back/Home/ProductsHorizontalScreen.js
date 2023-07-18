import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Constant from '../../../shared/Constant';
import GlobalStyles from '../../../shared/GlobalStyles';
import Images from '../../../assets/images/Images';

const ProductCardTwo = ({item}) => {
  return (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.ProductImage}
        resizeMode="contain"
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.madeIn}>{item.madeIn}</Text>
      <Text style={styles.discountPrice}>{item.discountPrice}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`₹${item.price}`}</Text>
        <Text style={styles.slashedPrice}>{`₹${item.percentage}`}</Text>
      </View>
    </View>
  );
};
const RenderProductsSearch = () => {
  const dataSearch = [
    {
      id: 1,
      image: Images.product1,
      madeIn: 'Made in Italia',
      name: 'Product 1',
      discountPrice: 3700,
      price: 4000,
      percentage: '20%',
    },
    {
      id: 2,
      image: Images.product1,
      madeIn: 'Made in Italia',
      name: 'Product 2',
      discountPrice: 3700,
      price: 4000,
      percentage: '20%',
    },
    {
      id: 3,
      image: Images.product1,
      madeIn: 'Made in Italia',
      name: 'Product 2',
      discountPrice: 3700,
      price: 4000,
      percentage: '20%',
    },
    {
      id: 4,
      image: Images.product1,
      madeIn: 'Made in Italia',
      name: 'Product 2',
      discountPrice: 3700,
      price: 4000,
      percentage: '20%',
    },
    {
      id: 5,
      image: Images.product1,
      madeIn: 'Made in Italia',
      name: 'Product 2',
      discountPrice: 3700,
      price: 4000,
      percentage: '20%',
    },
    {
      id: 6,
      image: Images.product1,
      madeIn: 'Made in Italia',
      name: 'Product 2',
      discountPrice: 3700,
      price: 4000,
      percentage: '20%',
    },
    // Add more product data objects here
  ];
  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={dataSearch}
        numColumns={1}
        renderItem={({item}) => <ProductCardTwo item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
    </View>
  );
};
const ProductsHorizontalScreen = () => {
  return (
    <View>
      <RenderProductsSearch />
    </View>
  );
};

export default ProductsHorizontalScreen;

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
  ProductImage: {
    width: 150,
    height: 150,
  },
  madeIn: {
    color: 'black',
    marginTop: 10,
    fontFamily: Constant.fontFamily,
  },
  name: {
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  discountPrice: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
  },
  slashedPrice: {
    color: 'red',
    marginLeft: 5,
    textDecorationLine: 'line-through',
    fontFamily: Constant.fontFamily,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
