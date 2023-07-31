import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../../shared/GlobalStyles';
import Constant from '../../shared/Constant';
import Images from '../../assets/images/Images';
import Button from '../../components/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OTPScreen = ({closeOtpModelVisible, openOtpModelVisible}) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value, index) => {
    const updatedOtp = otp.split('');
    updatedOtp[index] = value;
    setOtp(updatedOtp.join(''));
  };
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.wrapper}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Verify Your Account</Text>
          <View
            style={{
              backgroundColor: '#C39A59',
              height: 35,
              width: 35,
              borderRadius: 20,
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <FontAwesome
              onPress={closeOtpModelVisible}
              name="close"
              color="#fff"
              size={20}
              style={{alignSelf: 'center',}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subTitle}>We have sent an OTP on ********43</Text>
          {/* <Text style={styles.subTitleTwo}>Resend</Text> */}
        </View>
        <View>
          <TextInput
            style={GlobalStyles.inputContainer}
            placeholder="VERIFY CODE"
            value={otp}
            onChangeText={setOtp}
            placeholderTextColor={'#716F6F'}
          />
        </View>
        {/* <View style={styles.container}>
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
                </View> */}

        <View style={{marginTop: 20}}>
          <Button text="VERIFY" />
        </View>
        <Text style={styles.blueText}>Send verify code again?</Text>
      </View>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    fontFamily: Constant.AvenirBold,
    color: '#000',
    marginTop: 20,
  },
  subTitle: {
    fontSize: 14,
    color: Constant.colors.textColor,
    fontFamily: Constant.fontFamily,
    marginTop: 10,
  },
  subTitleTwo: {
    fontSize: 14,
    color: Constant.colors.textColor,
    fontFamily: Constant.AvenirBold,
    // fontWeight: 'bold',
    marginTop: 10,
  },
  blueText: {
    fontSize: 14,
    color: 'blue',
    fontFamily: Constant.fontFamily,
    marginTop: 20,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    // textDecorationLineColor: 'blue'
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
});
