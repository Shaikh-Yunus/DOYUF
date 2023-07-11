import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../assets/images/Images';
import Constant from '../shared/Constant';

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
    container: {
        height: 100,
        width: 100
    },
    swiperItem: {
        // height: 150,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        backgroundColor: 'grey',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDot: {
        backgroundColor: Constant.colors.primaryColor,
    },
});
