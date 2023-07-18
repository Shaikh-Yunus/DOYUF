import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import Constant from '../../shared/Constant';
import GlobalStyles from '../../shared/GlobalStyles'
import Images from '../../assets/images/Images';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const LoginScreen = ({ closeloginmodel, openregistrationmodel ,openforgotPasswordmodel}) => {


    return (
        <View style={[GlobalStyles.container, {}]}>
            <View style={{ padding: 0 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>LOGIN</Text>
                    <View style={{ backgroundColor: '#C39A59', height: 35, width: 35, borderRadius: 20, justifyContent: 'center' }}>
                        <FontAwesome onPress={closeloginmodel} name='close' color='#fff' size={20} style={{ alignSelf: 'center' }} />

                    </View>
                </View>
                <View style={styles.inputContainer}>
                    {/* <Image source={Images.uaeFlag} style={styles.flagIcon} /> */}
                    {/* <Text style={styles.phoneCode}>+971</Text> */}
                    <TextInput style={styles.textInput} placeholder="EMAIL OR PHONE" placeholderTextColor={'#716F6F'} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} placeholderTextColor={'#716F6F'} />
                </View>
                <TouchableOpacity onPress={() =>{closeloginmodel() ,openforgotPasswordmodel() }}>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20 }}>
                    <Button text='SIGN IN' />
                </View>
                <View style={[GlobalStyles.alignMiddle, { flexDirection: 'row', marginTop: 10 }]}>
                    <Text style={{ color: Constant.colors.textColor }}>Don't have an account? .</Text>
                    <TouchableOpacity onPress={() => { closeloginmodel(), openregistrationmodel() }}>
                        <Text style={{ color: Constant.colors.textColor, fontWeight: 'bold' }}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#D9D9D9', height: 1, marginTop: 20 }}></View>
                <Text style={{ fontFamily: Constant.fontFamily, color: "#716F6F", alignSelf: 'center', fontWeight: '5000', marginTop: 20 }}>Or Login With</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', }}>
                    <Image
                        source={Images.goolelogo}
                        style={{ width: 35, height: 35, marginRight: 10 }}
                    />
                    <Image
                        source={Images.facebooklogo}
                        style={{ width: 35, height: 35, marginLeft: 10 }}
                    />
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
        borderColor: '#D9D9D9',
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
