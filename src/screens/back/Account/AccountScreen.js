import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import GlobalStyles from '../../../shared/GlobalStyles';
import BackHeader from '../../../components/BackHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ScreenHeading from '../../../components/ScreenHeading';
import Constant from '../../../shared/Constant';

const OrderItem = ({order}) => {
  return (
    <View style={styles.card}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderNumber}>Order #{order.orderNumber}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <Text style={styles.orderAmount}>AED {order.amount}</Text>
      <Text style={styles.orderPlaced}>Order Placed: {order.placedDate}</Text>
    </View>
  );
};

const AccountScreen = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showOrders, setShowOrders] = useState(false);

  const orderData = [
    {orderNumber: '108', amount: '369.10', placedDate: 'July 02, 2023'},
    {orderNumber: '109', amount: '369.10', placedDate: 'July 02, 2023'},
    {orderNumber: '110', amount: '369.10', placedDate: 'July 02, 2023'},
    {orderNumber: '111', amount: '369.10', placedDate: 'July 02, 2023'},
    // Add more order items as needed
  ];

  return (
    <View style={GlobalStyles.container}>
      <BackHeader />

      <ScrollView style={GlobalStyles.wrapper}>
        <ScreenHeading text="Home / My Account" />

        <Pressable
          onPress={() => {
            setShowProfile(true);
            setShowOrders(false);
          }}
          style={styles.section}>
          <AntDesign name="user" size={25} color="black" />
          <Text style={styles.sectionText}>My Profile</Text>
          <AntDesign name="right" size={25} color="black" />
        </Pressable>

        <Pressable
          onPress={() => {
            setShowProfile(false);
            setShowOrders(true);
          }}
          style={styles.section}>
          <FontAwesome name="bars" size={25} color="black" />
          <Text style={styles.sectionText}>My Orders</Text>
          <AntDesign name="right" size={25} color="black" />
        </Pressable>

        <View style={styles.section}>
          <SimpleLineIcons name="logout" size={23} color="black" />
          <Text style={styles.sectionText}>Logout</Text>
          <AntDesign name="right" size={25} color="black" />
        </View>

        {showProfile && (
          <View style={styles.profileSection}>
            <Text style={styles.sectionHeading}>My Profile</Text>
            {/* Render the user's profile */}
            <Input placeholder="Name" />
            <Input placeholder="Email Id" />
            <Input placeholder="Phone" />
            <Input placeholder="Password" />

            <View style={{marginTop: 20, width: '50%'}}>
              <Button text="UPDATE DETAILS" />
            </View>
          </View>
        )}

        {showOrders && (
          <FlatList
            data={orderData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <OrderItem order={item} />}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius:5,
    padding: 10,
    marginBottom: 10,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderNumber: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'black',
    fontFamily:Constant.AvenirBold
  },
  orderAmount: {
    fontSize: 14,
    fontFamily:Constant.fontFamily,
    color: 'black',
  },
  orderPlaced: {
    fontSize: 14,
    color: 'grey',
    fontFamily:Constant.fontFamily,

  },
  section: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sectionText: {
    marginLeft: 10,
    fontFamily: Constant.fontFamily,
    flex: 1,
    color:'#000'
  },
  profileSection: {
    marginVertical: 20,
  },
  sectionHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Constant.fontFamily,
    marginBottom: 10,
  },
});
