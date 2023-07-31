import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import Constant from '../../shared/Constant';
import GlobalStyles from '../../shared/GlobalStyles';
import Input from '../../components/Input';
import {RadioButton} from 'react-native-paper';
import Images from '../../assets/images/Images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = ({closeregistrationmodel, openloginmodel}) => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [NAME, setNAME] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  console.log('this is email', email);
  console.log('this is NAME', NAME);
  console.log('this is username', username);
  console.log('this is password', password);
  console.log('this is phonenumber', phonenumber);
  console.log('this is selectedGender', selectedGender);

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phonenumberError, setPhonenumberError] = useState('');
  const [genderError, setGenderError] = useState('');

  const handleGenderChange = gender => {
    setSelectedGender(gender);
  };

  const HandleRegister = () => {
    setEmailError('');
    setNameError('');
    setUsernameError('');
    setPasswordError('');
    setPhonenumberError('');
    setGenderError('');
    // Validation
    if (email === '') {
      setEmailError('Email is required');
      return;
    }
    if (NAME === '') {
      setNameError('Name is required');
      return;
    }
    if (username === '') {
      setUsernameError('Username is required');
      return;
    }
    if (password === '') {
      setPasswordError('Password is required');
      return;
    }
    if (phonenumber === '') {
      setPhonenumberError('Phone number is required');
      return;
    }
    if (selectedGender === null) {
      setGenderError('Please select a gender');
      return;
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
        full_name: NAME,
        email: email,
        username: username,
        phone: phonenumber,
        password: password,
        gender: selectedGender,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(`${Constant.BASE_URL + 'register'}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.token > 0) {
            Alert.alert('user registration successful');
          }
        })
        .catch(error => {
          console.log('error', error);
          Alert.alert('user registration unsuccessful');
        });
    }
  };
  return (
    <View style={GlobalStyles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>REGISTER</Text>
          <View
            style={{
              backgroundColor: '#C39A59',
              height: 35,
              width: 35,
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <FontAwesome
              onPress={closeregistrationmodel}
              name="close"
              color="#fff"
              size={20}
              style={{alignSelf: 'center'}}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.prefixContainer}>
            <Image source={Images.uaeFlag} style={styles.flagIcon} />
            <Text style={styles.phoneCode}>+971</Text>
          </View>
          <TextInput
            style={styles.textInput}
            maxLength={10}
            value={phonenumber}
            keyboardType="number-pad"
            onChangeText={text => setPhonenumber(text)}
            placeholder="PHONE NUMBER"
            placeholderTextColor="#716F6F"
          />
        </View>
        {phonenumberError !== '' && (
          <Text style={styles.errorText}>This field is required</Text>
        )}
        <View>
          <TextInput
            style={GlobalStyles.inputContainer}
            placeholder="EMAIL"
            value={email}
            onChangeText={setemail}
            placeholderTextColor={'#716F6F'}
          />
        </View>
        {emailError !== '' && (
          <Text style={styles.errorText}>This field is required</Text>
        )}
        <View>
          <TextInput
            style={GlobalStyles.inputContainer}
            placeholder="NAME"
            value={NAME}
            onChangeText={setNAME}
            placeholderTextColor={'#716F6F'}
          />
        </View>
        {nameError !== '' && <Text style={styles.errorText}>{nameError}</Text>}
        <View>
          <TextInput
            style={GlobalStyles.inputContainer}
            placeholder="USERNAME"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={'#716F6F'}
          />
        </View>
        {usernameError !== '' && (
          <Text style={styles.errorText}>This field is required</Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 16,
            }}>
            <RadioButton
              value="male"
              status={selectedGender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => handleGenderChange('male')}
            />
            <Text style={styles.RadioButtonText}>Male</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 16,
            }}>
            <RadioButton
              value="female"
              status={selectedGender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => handleGenderChange('female')}
            />
            <Text style={styles.RadioButtonText}>Female</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="not-specified"
              status={
                selectedGender === 'not-specified' ? 'checked' : 'unchecked'
              }
              onPress={() => handleGenderChange('not-specified')}
            />
            <Text style={styles.RadioButtonText}>Prefer not to say</Text>
          </View>
        </View>
        {genderError == null && (
          <Text style={styles.errorText}>{genderError}</Text>
        )}
        <View>
          <TextInput
            style={GlobalStyles.inputContainer}
            placeholder="PASSWORD"
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={'#716F6F'}
          />
        </View>
        {passwordError !== '' && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}
        <Text style={styles.containPassword}>
          Password must contain at least 8 {'\n'}
          charecters
        </Text>
        <View style={{marginTop: 20}}>
          <Button onPress={HandleRegister} text="CREATE ACCOUNT" />
        </View>
        <View
          style={[
            GlobalStyles.alignMiddle,
            {flexDirection: 'row', marginTop: 20},
          ]}>
          <Text style={{color: Constant.colors.textColor}}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              openloginmodel(), closeregistrationmodel();
            }}>
            <Text
              style={{color: Constant.colors.textColor, fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  prefixContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
    color: '#716F6F',
  },
  containPassword: {
    fontFamily: Constant.fontFamily,
    color: '#716F6F',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
