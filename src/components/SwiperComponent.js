import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../assets/images/Images';

const SwiperComponent = () => {
    // Data for each swiper
    const data = [
        { id: 1, image: Images.swiper1 },
        { id: 2, image: Images.swiper2 },
        { id: 3, image: Images.swiper1 },
        { id: 4, image: Images.swiper2 },
        { id: 5, image: Images.swiper1 },
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
        <Swiper style={styles.container}>{renderSwiperItem()}</Swiper>
    );
};

export default SwiperComponent;

const styles = StyleSheet.create({
    container: {
        height: 300,
        // width: 313
    },
    swiperItem: {
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
    },
});
