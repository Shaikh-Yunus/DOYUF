import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Images from '../../assets/images/Images'
import Constant from '../../shared/Constant'

const LanguageScreen = () => {
    return (
        <View>
            <ImageBackground
                source={Images.women}
                style={{ height: '100%', width: '100' }}
            >
                <View style={{ backgroundColor: 'white' }}>
                    <Image source={Images.logo} style={{ height: 100, width: '100%' }} resizeMode='contain' />
                </View>
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>عربى</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LanguageScreen

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 15,
        // borderRadius: 8,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Constant.colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: Constant.fontFamily
    },
})