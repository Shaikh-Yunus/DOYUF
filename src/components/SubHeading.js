import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constant from '../shared/Constant'

const SubHeading = ({ text }) => {
    return (
        <View style={{ marginTop: 30, flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', color: Constant.colors.primaryColor, fontSize: 20 }}>|</Text>
            <Text style={{
                marginLeft: 10,
                fontWeight: 'bold',
                color: Constant.colors.textColor, fontSize: 18,
                fontFamily: "AvenirNextLTPro-Bold"
            }}>.font
                {text}
            </Text>

        </View>
    )
}

export default SubHeading

const styles = StyleSheet.create({})