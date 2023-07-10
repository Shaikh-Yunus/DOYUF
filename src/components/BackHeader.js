import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyles from '../shared/GlobalStyles'
import Images from '../assets/images/Images'
import Constant from '../shared/Constant'
const BackHeader = () => {
    return (
        <View>
            <View style={styles.HeaderContainer}>
                <View style={{ flex: 1 }}>
                    <FontAwesome5 name='bars' size={25} color="black" />
                </View>
                <View style={{ flex: 2 }}>
                    <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={Images.profileIcon} style={styles.icon} resizeMode="contain" />
                    <Image source={Images.heartIcon} style={styles.icon} resizeMode="contain" />
                    <Image source={Images.cartIcon} style={styles.icon} resizeMode="contain" />
                </View>
            </View>

            <View style={{ paddingHorizontal: 25, paddingVertical: 10, borderWidth: 0.5, borderColor: 'lightgrey' }} >
                <View style={styles.searchBar}>
                    <AntDesign name='search1' size={20} color="black" />
                    <TextInput style={styles.text} placeholder="SEARCH PRODUCTS..." />

                    <Feather name='mic' size={20} color="black" />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 70,
        backgroundColor: '#fff', // Replace with your desired background color
        // borderBottomWidth: 0.5,
        // borderBottomColor: 'grey'
    },
    logo: {
        height: 60,
        width: 150,
        resizeMode: 'contain',
    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginHorizontal: 7
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        // height: 60,
        backgroundColor: '#fff', // Replace with your desired background color
        borderWidth: 0.5,
        borderRadius: 5
    },
    text: {
        flex: 1,
        marginLeft: 30,
        fontSize: 14,
        color: 'black',
        fontFamily: Constant.fontFamily
    },
});

export default BackHeader;