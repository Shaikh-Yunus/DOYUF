import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import OnBoarding2 from './OnBoarding2';

const OnBoarding1 = () => {
    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: 'Description.\nSay something cool',
            image: require('../../assets/images/Woman1.png'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Other cool stuff',
            image: require('../../assets/images/couple.png'),
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Rocket guy',
            text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
            image: require('../../assets/images/couple.png'),
            backgroundColor: '#22bcb5',
        },
    ];

    const [showRealApp, setShowRealApp] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(false);
    const buttonLabel = (label) => {
        return (
            <View>
                <Text>
                    {label}
                </Text>
            </View>
        )
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                {/* <Text style={styles.title}>{item.title}</Text> */}
                <Image style={styles.image} source={item.image} />
                {/* <Text style={styles.text}>{item.text}</Text> */}
            </View>
        );
    };

    const onSlideChange = (index) => {
        setCurrentIndex(index);
    };

    const onDone = () => {
        setShowRealApp(true);
    };

    if (showRealApp) {
        return <OnBoarding2 />;
    } else {
        return (
            <View style={styles.container}>
                <AppIntroSlider
                    renderItem={renderItem}
                    data={slides}
                    onSlideChange={onSlideChange}
                    onDone={onDone}
                    activeDotStyle={{
                        backgroundColor: 'black',
                        width: 30
                    }}
                    renderNextButton={() => buttonLabel("next")}
                    renderSkipButton={() => buttonLabel("skip")}
                    renderDoneButton={() => buttonLabel("done")}
                    // onDone={() => {
                    //     setShowRealApp(true)
                    // }}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        // resizeMode: 'contain',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 24,
    },
    nextButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
    },
});

export default OnBoarding1;
