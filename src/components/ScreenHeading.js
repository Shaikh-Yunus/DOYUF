import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constant from '../shared/Constant'

const ScreenHeading = ({text}) => {
    return (
        <View style={{
            // flexDirection: 'row',
            // padding: 20,
            paddingVertical: 10,
            marginBottom: 20,
            borderBottomWidth: 0.5,
            borderColor: 'grey',
        }}>
            <Text style={{
                fontFamily: Constant.fontFamily,
                color: Constant.colors.textColor
            }}>{text}</Text>
        </View>
    )
}

export default ScreenHeading

const styles = StyleSheet.create({})