import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constant from '../shared/Constant'

const Button = ({ text }) => {
    return (
        <View style={{
            height: 50, backgroundColor: Constant.colors.primaryColor,
            justifyContent: 'center', alignItems: 'center',borderRadius:5
        }}>
            <Text style={{
                color: Constant.colors.whiteColor,
                // textTransform: 'capitalize'
                fontFamily: Constant.fontFamily
            }}>{text}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({})