import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import GlobalStyles from '../shared/GlobalStyles'

const Input = ({ placeholder, security, maxLength }) => {
    return (
        <View style={GlobalStyles.inputContainer}>
            <TextInput style={GlobalStyles.textInput}
                placeholder={placeholder}
                secureTextEntry={security}
                maxLength={maxLength}
            />

        </View>
    )
}

export default Input

const styles = StyleSheet.create({})