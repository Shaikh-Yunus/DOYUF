import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import GlobalStyles from '../../../shared/GlobalStyles'
import BackHeader from '../../../components/BackHeader'
import BottomTab from '../../../components/BottomTab'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SubHeading from '../../../components/SubHeading'
import Constant from '../../../shared/Constant'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
const AccountScreen = () => {
    return (
        <View style={GlobalStyles.container}>
            <BackHeader />

            <ScrollView style={GlobalStyles.wrapper}>
                <View style={{
                    // flexDirection: 'row',
                    // padding: 20,
                    paddingVertical: 10,
                    marginBottom: 20,
                    borderBottomWidth: 0.5,
                    borderColor: 'grey',
                }}>
                    <Text style={{
                        fontFamily: Constant.fontFamily,
                        color: Constant.colors.textColor
                    }}>Home / My Account</Text>
                </View>
                <View style={{ marginBottom: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="user" size={25} color="black" />
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 10, fontFamily: Constant.fontFamily }}>My Profile</Text>
                    </View>
                    <AntDesign name="right" size={25} color="black" />
                </View>
                <View style={{ marginBottom: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="bars" size={25} color="black" />
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 10, fontFamily: Constant.fontFamily }}>My Orders</Text>
                    </View>
                    <AntDesign name="right" size={25} color="black" />
                </View>
                <View style={{ marginBottom: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <SimpleLineIcons name="logout" size={23} color="black" />
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 10, fontFamily: Constant.fontFamily }}>Logout</Text>
                    </View>
                    <AntDesign name="right" size={25} color="black" />
                </View>



                <View style={{ marginVertical: 20 }}>
                    <Text style={{
                        color: Constant.colors.textColor,
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: Constant.fontFamily
                    }}>My Profile</Text>

                    <Input placeholder="Name" />
                    <Input placeholder="Email Id" />
                    <Input placeholder="Phone" />
                    <Input placeholder="Password" />

                    <View style={{ marginTop: 20, width: '50%' }}>
                        <Button text="UPDATE DETAILS" />
                    </View>
                </View>
            </ScrollView >


            {/* <View style={{ flex: 0 }}>
                <BottomTab />
            </View> */}
        </View >
    )
}

export default AccountScreen

const styles = StyleSheet.create({})