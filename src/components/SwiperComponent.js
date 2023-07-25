import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../assets/images/Images';
import Constant from '../shared/Constant';

const SwiperComponent = () => {
    // Data for each swiper
    const data = [
        { id: 1, image: Images.Banner1 },
        { id: 2, image: Images.Banner2 },
        { id: 3, image: Images.Banner3 },
        { id: 4, image: Images.Banner4 },
        { id: 5, image: Images.Banner5 },
        { id: 6, image: Images.Banner6 },
        { id: 7, image: Images.Banner7 },
        { id: 8, image: Images.Banner8 },
    ];

    // Render item for each swiper
    const renderSwiperItem = () => {
        return data.map((item) => (
            <View key={item.id} style={styles.swiperItem}>
                <Image source={item.image} style={styles.swiperImage} />
                <Text style={styles.swiperText}>{item.title}</Text>
            </View>
        ));
    };


    return (
        <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={[styles.dot, styles.activeDot]} />}

        >
            {renderSwiperItem()}
        </Swiper>
    );
};

export default SwiperComponent;

const styles = StyleSheet.create({
    // container: {
    //     height: 150,
    //     width: 155
    // },
    swiperItem: {
        paddingHorizontal:10,
        paddingBottom:30,
        // height: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ccc',
    },
    swiperImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    swiperText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Constant.fontFamily
    },
    dot: {
        width: 25,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'black',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        // position:'absolute',
        // top: 20
    },
    activeDot: {
        backgroundColor: Constant.colors.primaryColor,
        // position:'absolute',
        // top: 20
    },
});
