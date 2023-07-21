import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from '../screens/front/LoginScreen'
import Modal from 'react-native-modal'
import { useNavigation } from '@react-navigation/native'
const LoginModel = ({  }) => {
    useEffect(() => {
        openloginmodel()
    }, [])
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [loginmodelvisible, setloginmodelvisible] = useState(false);
   
    const openloginmodel = () => {
        setloginmodelvisible(true);
        setModalVisible(false);
    };

    const closeloginmodel = () => {
        setloginmodelvisible(false);
        navigation.goBack()
    };
    return (
        <View>
            <Modal visible={loginmodelvisible} animationType="slide" transparent>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 0,
                        paddingRight: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        height: '100%',
                        width: '100%',
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                            padding: 20,
                            width: '100%',
                            height: '70%',
                        }}>
                        <LoginScreen closeloginmodel={closeloginmodel} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default LoginModel

const styles = StyleSheet.create({})