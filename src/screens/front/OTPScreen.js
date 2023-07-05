import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../shared/GlobalStyles'
import Constant from '../../shared/Constant'
import Images from '../../assets/images/Images'
import Button from '../../components/Button'

const OTPScreen = () => {
    const [otp, setOtp] = useState('');

    const handleOtpChange = (value, index) => {
        const updatedOtp = otp.split('');
        updatedOtp[index] = value;
        setOtp(updatedOtp.join(''));
    };
    return (
        <View style={GlobalStyles.container}>
            <Text style={styles.title}>Enter your Email or {'\n'}Phone number</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.subTitle}>Didn't receive the OTP?</Text>
                <Text style={styles.subTitleTwo}>Resend</Text>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={otp[0]}
                    onChangeText={(value) => handleOtpChange(value, 0)}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={otp[1]}
                    onChangeText={(value) => handleOtpChange(value, 1)}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={otp[2]}
                    onChangeText={(value) => handleOtpChange(value, 2)}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={otp[3]}
                    onChangeText={(value) => handleOtpChange(value, 3)}
                    maxLength={1}
                    keyboardType="numeric"
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button text='VERIFY' />
            </View>
        </View >
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },
    subTitle: {
        fontSize: 14,
        color: Constant.colors.textColor,
        marginTop: 10
    },
    subTitleTwo: {
        fontSize: 14,
        color: Constant.colors.textColor,
        fontWeight: 'bold',
        marginTop: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    input: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 24,
    },

})