import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import Constant from '../../shared/Constant';
import GlobalStyles from '../../shared/GlobalStyles'
import Images from '../../assets/images/Images';
const LoginScreen = () => {
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.wrapper}>
                <Text style={styles.title}>Enter your Email or {'\n'}Phone number</Text>

                <View style={styles.inputContainer}>
                    <Image source={Images.uaeFlag} style={styles.flagIcon} />
                    <Text style={styles.phoneCode}>+971</Text>
                    <TextInput style={styles.textInput} placeholder="EMAIL OR PHONE*" />
                </View>

                {/* <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
            </View> */}

                <Text style={styles.forgotPassword}>Forgot password?</Text>
                <View style={{ marginTop: 20 }}>
                    <Button text='SIGN IN' />
                </View>
                <View style={[GlobalStyles.alignMiddle, { flexDirection: 'row', marginTop: 10 }]}>
                    <Text style={{ color: Constant.colors.textColor }}>Don't have an account?</Text>
                    <Text style={{ color: Constant.colors.textColor, fontWeight: 'bold' }}>Register</Text>
                </View>
            </View>
        </View >
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    flagIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    phoneCode: {
        fontSize: 16,
        color: '#000',
    },
    textInput: {
        // flex: 1,
        fontSize: 16,
        color: '#000',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#000',
        marginTop: 20,
    },
});
