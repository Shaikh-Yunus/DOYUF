import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Constant from '../shared/Constant'
import { fontConfig } from 'react-native-paper/lib/typescript/src/styles/fonts'
import { useNavigation } from '@react-navigation/native'
const FrontHead = ({ text }) => {
    const navigation = useNavigation()
    return (
        <View style={{
            padding: 15,
            height: 60,
            backgroundColor: 'white',
            // borderBottomWidth: 0.5,
            // borderBottomWidthColor: 'grey',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 6
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <AntDesign style={{}} name='left' size={25} color="black" />
                </TouchableOpacity>
                <Text style={{
                    flex: 1,
                    fontSize: 16,
                    color: Constant.colors.textColor,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: Constant.fontFamily,
                }}>{text}</Text>
            </View>
        </View>

    )
}

export default FrontHead

const styles = StyleSheet.create({})