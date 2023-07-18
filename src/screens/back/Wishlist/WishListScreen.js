import { StyleSheet, Text, View, Image, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../../../shared/GlobalStyles'
import FrontHead from '../../../components/FrontHead'
import Images from '../../../assets/images/Images'
import Constant from '../../../shared/Constant'
import Button from '../../../components/Button'
import BottomTab from '../../../components/BottomTab'
import ScreenHeading from '../../../components/ScreenHeading'
import {useNavigation} from '@react-navigation/native';


const WishListScreen = () => {
    const navigation = useNavigation();
    const wishlistData = [
        {
            id: 1,
            image: Images.product1,
            p_name: "Erica_beige",
            brand: "Made in Italia",
            price: "7417.53",
            qty: 2,
        },
        {
            id: 2,
            image: Images.product1,
            p_name: "Erica_beige",
            brand: "Made in Italia",
            price: "7417.53",
            qty: 2,
        },
        {
            id: 3,
            image: Images.product1,
            p_name: "Erica_beige",
            brand: "Made in Italia",
            price: "7417.53",
            qty: 2,
        },
        {
            id: 4,
            image: Images.product1,
            p_name: "Erica_beige",
            brand: "Made in Italia",
            price: "7417.53",
            qty: 2,
        },
        {
            id: 5,
            image: Images.product1,
            p_name: "Erica_beige",
            brand: "Made in Italia",
            price: "7417.53",
            qty: 2,
        },
    ]
    return (
        <View style={GlobalStyles.container}>
            <FrontHead />
            
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <ScreenHeading text="Home / My Wishlist" />
            </View>

            <View style={{
                flex: 1,
                // padding: 20
            }}>
                <View style={[GlobalStyles.wrapper, { height: '80%' }]}>
                    <FlatList
                        data={wishlistData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                paddingVertical: 10
                            }}>
                                <View style={{
                                    width: 125, height: 125, backgroundColor: 'lightgrey',
                                    marginRight: 10
                                }}>
                                    <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', fontFamily: Constant.fontFamily }}>{item.p_name}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', fontFamily: Constant.fontFamily }}>{item.brand}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', fontFamily: Constant.fontFamily }}>₹{item.price}</Text>
                                </View>
                            </View>
                        )}
                    />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={[{
                        borderWidth: 0.5,
                    }]}>
                        <Text style={styles.buttonText}>
                            CLEAR WISHLIST
                        </Text>
                    </View>
                    <View style={[{
                        backgroundColor: Constant.colors.primaryColor
                    }]}>
                        <Text style={styles.buttonTextWhite}>
                            ADD ALL TO CART
                        </Text>
                    </View>
                </View>

            </View>
            {/* <BottomTab /> */}
        </View>
    )
}

export default WishListScreen

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold', fontSize: 12, color: Constant.colors.textColor,
        padding: 15,
        fontFamily: Constant.fontFamily
    },
    buttonTextWhite: {
        fontWeight: 'bold', fontSize: 12, color: Constant.colors.whiteColor,
        padding: 15,
        fontFamily: Constant.fontFamily

    }
})