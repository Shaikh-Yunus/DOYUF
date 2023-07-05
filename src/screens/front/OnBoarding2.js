import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnBoarding2 = () => {
    return (
        <View style={{ backgroundColor: 'lightgreen', flex: 1 }}>
            <Text style={{ color: 'black' }}>OnBoarding2</Text>
            <Image style={{ height: 100, width: 100 }} source={{ uri: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75' }} />
        </View>
    )
}

export default OnBoarding2

const styles = StyleSheet.create({})