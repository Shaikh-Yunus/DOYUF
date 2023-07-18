import { StyleSheet, Text, View, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Constant from '../../shared/Constant';
import GlobalStyles from '../../shared/GlobalStyles'
import Input from '../../components/Input';
import { RadioButton } from 'react-native-paper';
import Images from '../../assets/images/Images';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const RegisterScreen = ({ closeregistrationmodel ,openloginmodel }) => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };
    return (
        <View style={GlobalStyles.container}>
            <View style={{ padding: 0 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>REGISTOR</Text>
                    <View style={{ backgroundColor: '#C39A59', height: 35, width: 35, borderRadius: 20, justifyContent: 'center' }}>
                        <FontAwesome onPress={closeregistrationmodel} name='close' color='#fff' size={20} style={{ alignSelf: 'center' }} />

                    </View>
                </View>
                <View style={GlobalStyles.inputContainer}>
                    <Image source={Images.uaeFlag} style={styles.flagIcon} />
                    <Text style={styles.phoneCode}>+971</Text>
                    <TextInput style={GlobalStyles.textInput} maxLength={10} placeholder="PHONE NUMBER" placeholderTextColor={'#716F6F'} />
                </View>

                <View style={GlobalStyles.inputContainer}>
                    <TextInput style={GlobalStyles.textInput} placeholder="EMAIL" placeholderTextColor={'#716F6F'} />
                </View>
                <View style={GlobalStyles.inputContainer}>
                    <TextInput style={GlobalStyles.textInput} placeholder="NAME" placeholderTextColor={'#716F6F'} />
                </View>
                <View style={GlobalStyles.inputContainer}>
                    <TextInput style={GlobalStyles.textInput} placeholder="USERNAME" placeholderTextColor={'#716F6F'} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 , justifyContent:'space-evenly' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginRight: 16  }}>
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

                <Text style={styles.containPassword}>Password must contain at least 8 {'\n'}
                    charecters</Text>
                <View style={{ marginTop: 20 }}>
                    <Button text='CREATE ACCOUNT' />
                </View>
                <View style={[GlobalStyles.alignMiddle, { flexDirection: 'row', marginTop: 20 }]}>
                    <Text style={{ color: Constant.colors.textColor }}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>{openloginmodel(),closeregistrationmodel()}}>
                    <Text style={{ color: Constant.colors.textColor, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
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
        fontSize: 13,
        color: '#716F6F'
    },
    containPassword: {
        fontFamily: Constant.fontFamily,
        color: '#716F6F',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 20
    },
})