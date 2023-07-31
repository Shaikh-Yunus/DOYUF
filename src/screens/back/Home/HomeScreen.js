import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Images from '../../../assets/images/Images';
import Constant from '../../../shared/Constant';
import GlobalStyles from '../../../shared/GlobalStyles';
import BackHeader from '../../../components/BackHeader';
import BottomTab from '../../../components/BottomTab';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SwiperComponent from '../../../components/SwiperComponent';
import {SubHeading, SubHeadingSearch} from '../../../components/SubHeading';
import {
  Category,
  CategoryFour,
  CategoryFive,
  CategoryThree,
  CategoryTwo,
} from '../../../components/Category';
import {Label, IconsGroup} from '../../../components/Label';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const data = [
    {id: '1', category: 'WOMEN', image: Images.Women1},
    {id: '2', category: 'MEN', image: Images.Men1},
    {id: '3', category: 'BAGS', image: Images.Bag1},
    {id: '4', category: 'SUNGLASSES', image: Images.Sunglasses1},
    {id: '5', category: 'SHOES', image: Images.Shoes1},
  ];
  const dataTwo = [
    {id: '1', category: 'WOMEN', image: Images.WhiteBag1},
    {id: '2', category: 'MEN', image: Images.Sunglasses2},
    {id: '3', category: 'MEN', image: Images.BlackBag1},
    {id: '4', category: 'BAGS', image: Images.Bag3},
    {id: '5', category: 'SUNGLASSES', image: Images.Bag4},
    {id: '6', category: 'SUNGLASSES', image: Images.RedGlasses},
    {id: '7', category: 'SHOES', image: Images.Bag5},
  ];
  const dataThree = [
    {id: '1', category: 'GUCCI', image: Images.Brand1},
    {id: '2', category: 'VERSACE', image: Images.Brand2},
    {id: '3', category: 'TOMMY HILFIGER', image: Images.Brand3},
    {id: '4', category: 'CALVIN KLEIN', image: Images.Brand4},
    {id: '5', category: 'DIESEL', image: Images.Brand5},
    {id: '6', category: 'GUESS', image: Images.Brand6},
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Pressable onPress={() => navigation.navigate('RenderProducts')}>
        <Image source={item.image} style={styles.image} />
      </Pressable>
      <Text style={styles.category}>{item.category}</Text>
    </View>
  );
  const renderItemTwo = ({item}) => (
    <View style={styles.item}>
      <Pressable onPress={() => navigation.navigate('RenderProducts')}>
        <Image
          source={item.image}
          style={{height: 100, width: 150}}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
  const renderItemThree = ({item}) => (
    <View style={styles.item}>
      <Pressable onPress={() => navigation.navigate('RenderProducts')}>
        <Image resizeMode="contain" source={item.image} style={styles.image} />
      </Pressable>
      <Text style={styles.category}>{item.category}</Text>
    </View>
  );
  const [searchPress, setSearchPress] = useState(false);
  const [isSearchTouched, setIsSearchTouched] = useState(false);
  console.log('this is isSearchTouched=>', isSearchTouched);
  const handleSearchInputTouch = () => {
    setIsSearchTouched(true);
  };
  const DefaultView = () => {
    setIsSearchTouched(false);
  };
  const handleSearch = isSearching => {
    setSearchPress(isSearching);
  };
  const recentSearches = [
    'Search 1',
    'Search 2',
    'Search 3',
    'Search 4',
    'Search 5',
    'Search 6',
    'Search 7',
    'Search 8',
    'Search 9',
    'Search 10',
  ];
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
  return (
    <View style={GlobalStyles.container}>
      <BackHeader
        onSearch={handleSearch}
        onPressSearch={handleSearchInputTouch}
        defaultView={DefaultView}
        disable={true}
      />

      {isSearchTouched == true ? (
        <ScrollView style={{flex: 1}}>
          <View style={GlobalStyles.wrapper}>
            <SubHeadingSearch text="RECENT SEARCHES" />
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {recentSearches.map((search, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: 'grey',
                    borderRadius: 8,
                    padding: 8,
                    margin: 4,
                  }}>
                  <Text style={{color: 'black'}}>{search}</Text>
                </View>
              ))}
            </View>
            <SubHeadingSearch text="TRENDING BRANDS" />
            <FlatList
              data={dataThree}
              renderItem={renderItemThree}
              keyExtractor={item => item.id}
              horizontal
            />
            <SubHeadingSearch text="EXPLORE MORE" />
            <CategoryFive />
            <SubHeadingSearch text="RECOMMENDED FOR YOU" />
            <RenderProductsSearch />
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1}}>
          {!searchPress ? (
            <ScrollView style={{flex: 1}}>
              <View style={GlobalStyles.wrapper}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal
                />
              </View>
              <View style={{height: 350, width: '100%'}}>
                <SwiperComponent />
              </View>
              <View style={{height: 100, width: '100%'}}>
                <FlatList
                  data={dataTwo}
                  renderItem={renderItemTwo}
                  keyExtractor={item => item.id}
                  horizontal
                />
              </View>

              <View
                style={{
                  borderWidth: 0.5,
                  marginTop: 30,
                  color: 'lightGrey',
                  // marginHorizontal: 100,
                }}></View>
              <View stlye={{}}>
                <Image
                  source={Images.banner}
                  style={{marginTop: 20, width: '100%', height: 130}}
                />
              </View>
              <View style={GlobalStyles.wrapper}>
                <View>
                  <SubHeading text="SHOP BY CATEGORY" />
                </View>
                <View style={{marginTop: 20}}>
                  <Category />
                </View>
              </View>
              <View style={GlobalStyles.wrapper}>
                <View>
                  <Image
                    source={Images.banner2}
                    style={{height: 150, width: '100%'}}
                  />
                </View>
                <View>
                  <SubHeading text="PREMIUM COLLECTION" />
                </View>
                <View style={{marginTop: 20}}>
                  <CategoryTwo />
                </View>
                <View>
                  <SubHeading text="YOUR FAVORITE LABELS" />
                </View>
                <View style={{marginTop: 20}}>
                  <Label />
                </View>
                <View>
                  <SubHeading text="EXCLUSIVELY ON DOYUF" />
                </View>
                <View style={{marginTop: 20}}>
                  <CategoryThree />
                </View>
                <View>
                  <SubHeading text="TOP LABELS" />
                </View>
                <View style={{marginTop: 20}}>
                  <CategoryFour />
                </View>
              </View>
              <View>
                <Image
                  source={Images.banner3}
                  style={{height: 100, width: '100%'}}
                  resizeMode="contain"
                />
              </View>
              <View style={GlobalStyles.wrapper}>
                <View>
                  <SubHeading text="THE DOYUF BRAND PROMISE" />
                </View>
                <View style={{}}>
                  <IconsGroup />
                </View>
              </View>
            </ScrollView>
          ) : (
            <View style={{flex: 1}}>
              <SubHeadingSearch text="SUGGESTIONS" />

              <SubHeadingSearch text="PRODUCTS" />
              <RenderProductsSearch />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    // backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderColor: 'lightgrey',
    padding: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderColor: Constant.colors.textColor,
    borderRadius: 5,
  },
  category: {
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: Constant.colors.textColor,
    fontFamily: Constant.medium,
  },
  // Recommended for you design
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

export default HomeScreen;
