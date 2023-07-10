import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import GlobalStyles from '../shared/GlobalStyles'
import Constant from '../shared/Constant'

const BottomTab = () => {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                // postition:'absolute'
                // paddingVertical: 15
                height:40,
            }}>
                <FontAwesome name='home' size={25} color={Constant.colors.primaryColor} style={{ marginHorizontal: 10 }} />
                <AntDesign name='heart' size={25} color={Constant.colors.primaryColor} style={{ marginHorizontal: 10 }} />
                <FontAwesome name='shopping-cart' size={25} color={Constant.colors.primaryColor} style={{ marginHorizontal: 10 }} />
                <FontAwesome name='user' size={25} color={Constant.colors.primaryColor} style={{ marginHorizontal: 10 }} />
            </View>

        </>
    )
}

export default BottomTab

const styles = StyleSheet.create({})