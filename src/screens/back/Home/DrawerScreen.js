import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../../../shared/GlobalStyles'
import BackHeader from '../../../components/BackHeader'
import Constant from '../../../shared/Constant'

const DrawerScreen = () => {
    return (
        <View style={GlobalStyles.container}>
            <BackHeader Onpress={() => console.log("pressed")} />
            <View style={GlobalStyles.wrapper}>
                <Text style={{
                    color: Constant.colors.primaryColor,
                    fontFamily: Constant.fontFamily,

                }}>HOME</Text>
            </View>
        </View>
    )
}

export default DrawerScreen

const styles = StyleSheet.create({})