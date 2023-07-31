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
import {Dimensions,useWindowDimensions } from 'react-native';

const data = [
  {
    id: 1,
    image: Images.bag1,
    madeIn: 'Gucci',
    name: 'Golden Heels',
    price: 4000,
    slashedPrice: 5000,
    discount: 70,
  },
  {
    id: 2,
    image: Images.Bag3,
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
const calculateNumColumns = () => {
  const screenWidth = Dimensions.get('window').width;
  if (screenWidth >= 768) {
    // For tablets and larger screens
    return 3;
  } else if (screenWidth >= 480) {
    // For big screen mobile devices
    return 2;
  } else {
    // For smaller mobile devices
    return 2;
  }
};
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const handleNavtoProdDetails = () => {
    navigation.navigate('ProductDetailsScreen');
  };
  const numColumns = calculateNumColumns();
  const containerWidth = useWindowDimensions().width;

  // Adjust the image width and height based on the container width and number of columns
  const imageWidth = (containerWidth - (numColumns + 1) * 10) / numColumns;
  const imageHeight = imageWidth;
  return (
    <Pressable onPress={handleNavtoProdDetails} style={styles.card}>
      <Pressable style={styles.heartIconContainer}>
        <AntDesign name="hearto" size={20} color="black" />
      </Pressable>
      <Image
        source={item.image}
        style={[styles.image, {width: imageWidth, height: imageHeight}]}
        resizeMode="cover"
      />

      <Text style={styles.madeIn}>{item.madeIn}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`AED ${item.price}`}</Text>
        <Text style={styles.slashedPrice}>{`AED ${item.slashedPrice}`}</Text>
      </View>
      <Text style={styles.price}>{`${item.discount}% Off`}</Text>
    </Pressable>
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
  const numColumns = calculateNumColumns();

  return (
    <View style={GlobalStyles.container}>
      <BackHeader disable={true} />
      <FlatList
        data={data}
        numColumns={numColumns}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={item => item.id.toString()}
        // contentContainerStyle={styles.productContainer}
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
            <View style={{}}>
              <Text style={styles.modalText}>Default</Text>
              <View style={styles.line}></View>
              <Text style={styles.modalText}>Popularity</Text>
              <View style={styles.line}></View>
              <Text style={styles.modalText}>Latest</Text>
              <View style={styles.line}></View>
              <Text style={styles.modalText}>Price (Low)</Text>
              <View style={styles.line}></View>
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
    // flexWrap: 'wrap',
    // alignItems: 'center',
  },
  productContainer: {
    padding: 5,
  },
  heartIconContainer: {
    backgroundColor: '#e9ecef',
    borderRadius: 100,
    padding: 5,
    marginBottom: 3,
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
  },
  image: {
    width: 150,
    height: 150,
  },
  madeIn: {
    color: 'black',
    marginTop: 10,
    fontSize:20,
    fontFamily: Constant.AvenirBold,
    // fontWeight: 'bold',
  },
  name: {
    color: '#4a4a4a',
    marginTop: 5,
    // fontWeight: 'bold',
    fontFamily: Constant.medium,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  price: {
    color: '#cb0000',
    fontSize: 12,
    // fontWeight: 'bold',
    fontFamily: Constant.AvenirBold,
  },
  slashedPrice: {
    color: 'black',
    marginLeft: 5,
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontFamily: Constant.AvenirBold,
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
    // fontWeight: 'bold',
    fontFamily: Constant.AvenirBold,
    color: 'black',
  },
  modalText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 8,
    fontFamily: Constant.fontFamily,
    // borderBottomWidth:0.5,
    alignSelf: 'center',
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
  },
});
