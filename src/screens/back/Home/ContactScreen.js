import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackHeader from '../../../components/BackHeader';
import GlobalStyles from '../../../shared/GlobalStyles';
import Constant from '../../../shared/Constant';

const ContactScreen = () => {
    return (
        <View style={GlobalStyles.container}>
            <BackHeader disable={false} />
            <View style={GlobalStyles.wrapper}>
                <Text style={styles.heading}>Contact</Text>
                <Text style={styles.SubHeading}>DOYUF GENERAL TRADING CO. LLC</Text>
                <Text style={styles.paragraph}>
                    Address: BYAN BUSINESS CENTER, DUBAI INVESTMENT 
                    PARK FIRST, DUBAI, UNITED ARAB EMIRATES PO. BOX,
                    55609.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        color: 'black',
        // fontWeight: 'bold',
        fontFamily: Constant.AvenirBold,
        marginTop: 20,
        marginBottom: 10,
    },
    SubHeading: {
        fontSize: 20,
        color: 'black',
        // fontWeight: 'bold',
        fontFamily: Constant.AvenirBold,
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
    },
});

export default ContactScreen;
