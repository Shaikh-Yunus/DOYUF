import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../../../assets/images/Images';
import GlobalStyles from '../../../shared/GlobalStyles';
import Constant from '../../../shared/Constant';
import StarRating from 'react-native-star-rating-widget';
import ProductsHorizontalScreen from './ProductsHorizontalScreen';
import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const navigation = useNavigation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Current image index state
  const images = [Images.bag1, Images.Bag3, Images.Bag4]; // Array of three images
  const [selectedButton, setSelectedButton] = useState(null); // Selected button state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setSelectedButton('left');
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    setSelectedButton('right');
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedReview, setIsExpandedReview] = useState(false);
  const [isExpandedReturn, setIsExpandedReturn] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleReview = () => {
    setIsExpandedReview(!isExpandedReview);
  };
  const toggleReturn = () => {
    setIsExpandedReturn(!isExpandedReturn);
  };
  const averageRating = 3.5;
  const ratings = [
    { stars: 5, percentage: 0 },
    { stars: 4, percentage: 0 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];
  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Review:', review);
    console.log('Rating:', rating);
    // Reset form fields
    setName('');
    setEmail('');
    setReview('');
    setRating(0);
  };
  const scrollViewRef = useRef(null);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.wrapper}>
        <ScrollView ref={scrollViewRef} style={{ height: '95%' }}>
          <View style={styles.iconsContainer}>
            <View style={styles.topLeftIcon}>
              <Pressable onPress={() => navigation.goBack()} style={styles.iconBackground}>
                <AntDesign name="left" size={15} color="black" />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Home')} style={styles.iconBackground}>
                <AntDesign name="home" size={15} color="black" />
              </Pressable>
            </View>

            <View style={styles.topRightIcon}>
              <Pressable onPress={() => navigation.navigate('CartScreen')} style={styles.iconBackground}>
                <AntDesign name="shoppingcart" size={15} color="black" />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('WishListScreen')} style={styles.iconBackground}>
                <AntDesign name="hearto" size={15} color="black" />
              </Pressable>
            </View>
          </View>
          <Image
            source={images[currentImageIndex]}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.brandContainer}>
            <Text style={styles.brandText}>Gucci</Text>
            <View style={styles.imageButtons}>
              <Pressable
                style={[
                  styles.button,
                  selectedButton === 'left' && {
                    backgroundColor: Constant.colors.primaryColor,
                  },
                ]}
                onPress={handlePrevImage}>
                <AntDesign
                  name="left"
                  size={12}
                  color={selectedButton === 'left' ? 'white' : 'grey'}
                />
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  selectedButton === 'right' && {
                    backgroundColor: Constant.colors.primaryColor,
                  },
                ]}
                onPress={handleNextImage}>
                <AntDesign
                  name="right"
                  size={12}
                  color={selectedButton === 'right' ? 'white' : 'grey'}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>High Quality Bags</Text>
          </View>
          <View style={styles.pricesContainer}>
            <Text style={styles.offerPrice}>AED 500</Text>
            <Text style={styles.mrpPrice}>AED 1000</Text>
            <Text style={styles.discount}>On Sale 50% Off</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <Text style={styles.deliveryText}>Delivery by</Text>
            <Text style={styles.deliveryDate}>26th July, Wednesday</Text>
          </View>
          <TextInput
            style={styles.zipcodeInput}
            placeholder="Delivery Zipcode"
            placeholderTextColor={'grey'}
          />
          <View style={{ borderWidth: 0.3, borderColor: 'lightgrey' }}></View>
          <Text style={{ marginTop: 10, color: 'grey' }}>
            For orders other than UAE - Custom duty may be charged at the time
            of delivery
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              Also Available In:
            </Text>
            <View style={{ marginTop: 10 }}>
              <Image
                source={Images.Bag1}
                style={{
                  height: 65,
                  width: 65,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          <Pressable
            style={styles.descriptionContainer}
            onPress={toggleDescription}>
            <Text style={styles.headingText}>Product Description:</Text>
            <AntDesign
              name={isExpanded ? 'up' : 'down'}
              size={24}
              color="black"
            />
          </Pressable>

          {isExpanded && (
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>Gender: Male</Text>
              <Text style={styles.detailText}>Color: White</Text>
              <Text style={styles.detailText}>Size: Medium</Text>
            </View>
          )}
          <Pressable onPress={toggleReview} style={styles.reviewContainer}>
            <Text style={styles.headingText}>Review:</Text>
            <AntDesign
              name={isExpandedReview ? 'up' : 'down'}
              size={24}
              color="black"
            />
          </Pressable>
          {isExpandedReview && (
            <View style={{ flex: 1, marginTop: 30 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                Average Rating: {averageRating.toFixed(1)}
              </Text>
              <View style={{ marginTop: 30 }}>
                <StarRating
                  maxStars={5}
                  rating={averageRating}
                  size={30}
                  fullStarColor="gold"
                  emptyStarColor="lightgray"
                />
              </View>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                0 Reviews
              </Text>
              {ratings.map((rating, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginVertical: 10,
                    marginTop: 30,
                  }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
                    {rating.stars} Star:
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View
                        style={{
                          flex: rating.percentage,
                          height: 10,
                          backgroundColor: 'black',
                        }}
                      />
                      <View
                        style={{
                          flex: 100 - rating.percentage,
                          height: 10,
                          backgroundColor: 'lightgray',
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {rating.percentage}%
                    </Text>
                  </View>
                </View>
              ))}

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 40,
                }}>
                ADD YOUR REVIEW
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 10,
                }}>
                Your Ratings
              </Text>
              <View style={{}}>
                <StarRating
                  maxStars={5}
                  rating={rating}
                  size={30}
                  fullStarColor="gold"
                  emptyStarColor="white"
                  onChange={handleRatingChange}
                />
              </View>

              <TextInput
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 30,
                  borderWidth: 0.5,
                  borderRadius: 10,
                  paddingLeft: 10,
                }}
                placeholder="Your Name"
                value={name}
                onChangeText={text => setName(text)}
              />

              <TextInput
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                  paddingLeft: 10,
                  marginTop: 15,
                  borderWidth: 0.5,
                  borderRadius: 10,
                }}
                placeholder="Your Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />

              <TextInput
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                  paddingLeft: 10,
                  paddingTop: 10,
                  marginTop: 15,
                  height: 100,
                  textAlignVertical: 'top',
                  borderWidth: 0.5,
                  borderRadius: 10,
                }}
                placeholder="Your Review"
                multiline
                value={review}
                onChangeText={text => setReview(text)}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: Constant.colors.primaryColor,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 5,
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleSubmit}>
                <Text
                  style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                  Submit Now
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <Pressable
            onPress={toggleReturn}
            style={styles.returnPolicyContainer}>
            <Text style={styles.headingText}>Return Policy:</Text>
            <AntDesign
              name={isExpandedReturn ? 'up' : 'down'}
              size={24}
              color="black"
            />
          </Pressable>
          {isExpandedReturn && (
            <Pressable style={styles.detailsContainer}>
              <Text style={styles.detailText}>
                Return any unsatisfactory items within 14 days from receiving
                your order.
              </Text>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>
                *Free delivery for orders above AED 200
              </Text>
            </Pressable>
          )}
          <Text
            style={{
              color: 'black',
              // fontWeight: 'bold',
              fontFamily: Constant.AvenirBold,
              fontSize: 25,
              marginTop: 30,
            }}>
            Check This Out
          </Text>
          <ProductsHorizontalScreen />
          <Text style={{ color: 'black', fontFamily: Constant.AvenirBold, fontSize: 25 }}>
            Related Products
          </Text>
          <ProductsHorizontalScreen />
        </ScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 10,
              bottom: 50,
              // left: 0,
              right: 0,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 100,
            }}
            onPress={scrollToTop}>
            <AntDesign name="arrowup" size={20} color="brown" />
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.outOfStockText}>OUT OF STOCK</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconsContainer: {
    // position:'absolute'
    zIndex: 10,
  },
  iconBackground: {
    backgroundColor: 'lightgrey',
    borderRadius: 100,
    padding: 5,
    marginBottom: 8,
  },
  topLeftIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    // flexDirection: 'row',
  },
  topRightIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    // flexDirection: 'row',
  },
  iconBackground: {
    backgroundColor: 'lightgrey',
    borderRadius: 100,
    padding: 5,
    marginBottom: 8,
  },

  image: {
    height: 200,
    width: '100%',
    // position:'absolute',
    // alignSelf: 'center',
  },
  imageButtons: {
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: 'lightgrey',
  },
  button: {
    backgroundColor: 'white',
    // borderRadius: 15,
    padding: 15,
  },
  brandContainer: {
    marginTop: 20,
    // marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandText: {
    color: 'black',
    fontSize: 28,
    // fontWeight: 'bold',
    fontFamily: Constant.AvenirBold,
  },
  nameContainer: {
    marginBottom: 10,
  },
  nameText: {
    color: 'black',
    fontSize: 18,
    fontFamily:Constant.medium,
    // fontWeight: 'bold',
  },
  pricesContainer: {
    // flex:1,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerPrice: {
    color: '#cb0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mrpPrice: {
    // flex: 2,
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 100,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  discount: {
    flex: 3,
    color: '#cb0000',
    fontSize: 12,
    // marginRight:5,
  },
  deliveryContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  deliveryText: {
    color: 'grey',
    marginRight: 10,
  },
  deliveryDate: {
    color: 'darkblue',
  },
  zipcodeInput: {
    height: 40,
    width: 210,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontStyle: 'italic',
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flex: 1,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
  },
  detailText: {
    color: 'grey'
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
  },
  returnPolicyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
  },
  headingText: {
    fontSize: 22,
    // fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
    color: 'black',
  },
  bottomContainer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    backgroundColor: 'white',
    // height: '5%',
    // padding: 12,
    // alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: Constant.colors.primaryColor,
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  outOfStockText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductDetailsScreen;
