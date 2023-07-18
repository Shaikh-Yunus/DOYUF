import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CouponCodeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PROMO CODE</Text>
        <TouchableOpacity>
          <AntDesign name="close" color="black" size={25} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>Select a Promo or type a Coupon Code</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="ENTER YOUR COUPON CODE"
          style={styles.textInput}
        />
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>GET</Text>
        <Text style={styles.cardDescription}>
          Extra 10% Off up to 100 AED/SAR on first Purchase
        </Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    marginTop: 10,
    fontSize: 14,
    // fontWeight: 'bold',
    color: 'grey',
  },
  inputContainer: {
    marginTop: 60,
  },
  inputLabel: {
    fontSize: 16,
    color: 'black',
  },
  textInput: {
    padding: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  cardContainer: {
    backgroundColor:'lightblue',
    marginTop: 20,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  cardDescription: {
    fontSize: 12,
    // textDecorationLine: 'underline',
    color: 'black',
  },
  applyButton: {
    width: 90,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
    marginTop: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end'
  },
  applyButtonText: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: 'blue',
  },
});

export default CouponCodeScreen;
