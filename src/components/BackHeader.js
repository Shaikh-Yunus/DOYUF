import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyles from '../shared/GlobalStyles'
import Images from '../assets/images/Images'
const BackHeader = () => {
    return (
        <View>
            <View style={styles.HeaderContainer}>
                <FontAwesome5 name='bars' size={25} color="black" />
                <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
                <Feather name='user' size={25} color="black" />
                <Image source={Images.bellIcon} style={styles.icon} resizeMode="contain" />
                <SimpleLineIcons name='handbag' size={25} color="black" />
            </View>
            {/* <View style={styles.searchBar}>
                <EvilIcons name='search' size={25} color="black" />
                <Feather name='mic' size={25} color="black" />

            </View> */}
            <View style={{ paddingHorizontal: 25, paddingVertical: 10, borderWidth: 0.5, borderColor: 'lightgrey' }} >
                <View style={styles.searchBar}>
                    <AntDesign name='search1' size={20} color="black" />
                    <TextInput style={styles.text} placeholder="SEARCH PRODUCTS..." />
                    {/* <Text style={styles.text}>SEARCH PRODUCTS...</Text> */}

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
        height: 25,
        width: 25,
        resizeMode: 'contain',
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
    },
});

export default BackHeader;