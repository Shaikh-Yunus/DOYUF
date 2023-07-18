import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../../assets/images/Images'
import GlobalStyles from '../../shared/GlobalStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Button from '../../components/Button'
import Constant from '../../shared/Constant'

const ForgotPassword = ({ closeforgotPasswordmodel, openloginmodel }) => {
  return (
    <View style={GlobalStyles.container}>
      <View style={{ padding: 0 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>FORGOT PASSWORD</Text>
          <View style={{ backgroundColor: '#C39A59', height: 35, width: 35, borderRadius: 20, justifyContent: 'center' }}>
            <FontAwesome onPress={closeforgotPasswordmodel} name='close' color='#fff' size={20} style={{ alignSelf: 'center' }} />

          </View>
        </View>
        <View style={GlobalStyles.inputContainer}>
          <Image source={Images.uaeFlag} style={styles.flagIcon} />
          <Text style={styles.phoneCode}>+971</Text>
          <TextInput style={GlobalStyles.textInput} maxLength={10} placeholder="PHONE NUMBER" placeholderTextColor={'#716F6F'} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button text='SUBMIT' />
        </View>
        <View style={[GlobalStyles.alignMiddle, { flexDirection: 'row', marginTop: 20 }]}>
          <Text style={{ color: Constant.colors.textColor }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => { openloginmodel(), closeforgotPasswordmodel() }}>
            <Text style={{ color: Constant.colors.textColor, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
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

})

export default ForgotPassword
