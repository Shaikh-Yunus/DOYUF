import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Constant from '../../shared/Constant';
import GlobalStyles from '../../shared/GlobalStyles'
import Input from '../../components/Input';
import { RadioButton } from 'react-native-paper';
import Images from '../../assets/images/Images';

const RegisterScreen = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.wrapper}>
                <Text style={styles.title}>Lets get personal</Text>
                <Text style={styles.subTitle}>Register for unique shopping experience</Text>

                <View style={GlobalStyles.inputContainer}>
                    <Image source={Images.uaeFlag} style={styles.flagIcon} />
                    <Text style={styles.phoneCode}>+971</Text>
                    <TextInput style={GlobalStyles.textInput} maxLength={10} placeholder="PHONE NUMBER*" />
                </View>

                <Input placeholder='NAME*' />
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <RadioButton
                            value="male"
                            status={selectedGender === 'male' ? 'checked' : 'unchecked'}
                            onPress={() => handleGenderChange('male')}
                        />
                        <Text style={styles.RadioButtonText}>Male</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <RadioButton
                            value="female"
                            status={selectedGender === 'female' ? 'checked' : 'unchecked'}
                            onPress={() => handleGenderChange('female')}
                        />
                        <Text style={styles.RadioButtonText}>Female</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="not-specified"
                            status={selectedGender === 'not-specified' ? 'checked' : 'unchecked'}
                            onPress={() => handleGenderChange('not-specified')}
                        />
                        <Text style={styles.RadioButtonText}>Prefer not to say</Text>
                    </View>
                </View>

                <Input placeholder='EMAIL*' />
                <Input placeholder='PASSWORD*' security={true} />

                <Text style={styles.forgotPassword}>Forgot password?</Text>
                <View style={{ marginTop: 20 }}>
                    <Button text='CREATE ACCOUNT' />
                </View>
                <View style={[GlobalStyles.alignMiddle, { flexDirection: 'row', marginTop: 20 }]}>
                    <Text style={{ color: Constant.colors.textColor }}>Already have an account?</Text>
                    <Text style={{ color: Constant.colors.textColor, fontWeight: 'bold' }}>Login</Text>
                </View>
            </View>
        </View >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },
    subTitle: {
        fontSize: 14,
        color: Constant.colors.textColor
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
    RadioButtonText: {
        fontSize: 13
    },
    forgotPassword: {
        fontSize: 14,
        color: '#000',
        marginTop: 20,
    },
})