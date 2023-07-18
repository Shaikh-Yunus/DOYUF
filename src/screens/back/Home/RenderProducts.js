import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../../assets/images/Images';
import GlobalStyles from '../../../shared/GlobalStyles';
import BackHeader from '../../../components/BackHeader';
import BottomTab from '../../../components/BottomTab';
import Constant from '../../../shared/Constant';
import Modal from 'react-native-modal';
import {SubHeading} from '../../../components/SubHeading';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    image: Images.product1,
    madeIn: 'Gucci',
    name: 'Golden Heels',
    price: 4000,
    slashedPrice: 5000,
    discount: 70,
  },
  {
    id: 2,
    image: Images.product1,
    madeIn: 'Gucci',
    name: 'Golden Heels',
    price: 4000,
    slashedPrice: 5000,
    discount: 70,
  },
  {
    id: 3,
    image: Images.product1,
    madeIn: 'Gucci',
    name: 'Golden Heels',
    price: 4000,
    slashedPrice: 5000,
    discount: 70,
  },
  {
    id: 4,
    image: Images.product1,
    madeIn: 'Gucci',
    name: 'Golden Heels',
    price: 4000,
    slashedPrice: 5000,
    discount: 70,
  },
  {
    id: 5,
    image: Images.product1,
    madeIn: 'Gucci',
    name: 'Golden Heels',
    price: 4000,
    slashedPrice: 5000,
    discount: 70,
  },
  {
    id: 6,
    image: Images.product1,
    madeIn: 'Gucci',
    name: 'Golden Heels',
    price: 4000,
    slashedPrice: 5000,
    discount: 70,
  },
  // Add more product data objects here
];

const ProductCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Pressable style={styles.heartIconContainer}>
        <AntDesign name="hearto" size={20} color="black" />
      </Pressable>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.madeIn}>{item.madeIn}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`AED ${item.price}`}</Text>
        <Text style={styles.slashedPrice}>{`AED ${item.slashedPrice}`}</Text>
      </View>
      <Text style={styles.price}>{`${item.discount}% Off`}</Text>
    </View>
  );
};

const RenderProducts = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSortPress = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleFilterPress = () => {
    navigation.navigate('FilterScreen');
  };
  return (
    <View style={GlobalStyles.container}>
      <BackHeader />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 15,
            paddingVertical: 3,
            borderRadius: 10,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Pressable onPress={handleSortPress} style={{flexDirection: 'row'}}>
            <Feather name="filter" color="white" size={20} />
            <Text style={{color: 'white', marginLeft: 10}}>Sort</Text>
          </Pressable>
          <View style={styles.separator} />
          <Pressable onPress={handleFilterPress} style={{flexDirection: 'row'}}>
            <Feather name="filter" color="white" size={20} />
            <Text style={{color: 'white', marginLeft: 10}}>Filter</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>SORT BY</Text>
              <TouchableOpacity onPress={closeModal}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.modalText}>Default</Text>
              <Text style={styles.modalText}>Popularity</Text>
              <Text style={styles.modalText}>Latest</Text>
              <Text style={styles.modalText}>Price (Low)</Text>
              <Text style={styles.modalText}>Price (High)</Text>
            </View>
          </View>
        </Modal>
      </View>
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
  heartIconContainer: {
    backgroundColor: '#e9ecef',
    borderRadius: 100,
    padding: 5,
    marginBottom: 3,
    alignSelf: 'flex-end',
  },
  image: {
    width: 150,
    height: 150,
  },
  madeIn: {
    color: 'black',
    marginTop: 10,
    fontFamily: Constant.fontFamily,
    fontWeight: 'bold',
  },
  name: {
    color: 'black',
    marginTop: 5,
    // fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
  },
  slashedPrice: {
    color: 'black',
    marginLeft: 5,
    textDecorationLine: 'line-through',
    fontFamily: Constant.fontFamily,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  //filter and sort
  separator: {
    width: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 16,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  modalText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 8,
  },
});
