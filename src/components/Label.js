import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Images from '../assets/images/Images';
import Constant from '../shared/Constant';

const GroupImages = {
    Cat1: Images.L1,
    Cat2: Images.L2,
    Cat3: Images.L3,
    Cat4: Images.L4,
};

const Label = () => {
    return (
        <View style={styles.Labelcontainer}>
            <View style={styles.labelrow}>
                <Image source={GroupImages.Cat1} style={styles.labelimage} resizeMode="contain" />
                <Image source={GroupImages.Cat2} style={styles.labelimage} resizeMode="contain" />
            </View>
            <View style={styles.row}>
                <Image source={GroupImages.Cat3} style={styles.labelimage} resizeMode="contain" />
                <Image source={GroupImages.Cat4} style={styles.labelimage} resizeMode="contain" />
            </View>
        </View>
    );
};

const Icons = {
    Icon1: Images.truck,
    Icon2: Images.verified,
    Icon3: Images.trusted,
    Icon4: Images.enquiry,
};

const IconsGroup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.circle}>
                    <Image source={Icons.Icon1} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.text}>Free</Text>
                    <Text style={styles.text}>Shipping</Text>
                </View>
                <View style={styles.circle}>
                    <Image source={Icons.Icon2} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.text}>Safe</Text>
                    <Text style={styles.text}>Delivery</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.circle}>
                    <Image source={Icons.Icon3} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.text}>Trusted</Text>
                    <Text style={styles.text}>Platform</Text>
                </View>
                <View style={styles.circle}>
                    <Image source={Icons.Icon4} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.text}>Enquiry</Text>
                </View>
            </View>
        </View>
    );
};
export { Label, IconsGroup };

const styles = StyleSheet.create({
    Labelcontainer: {
        flex: 1,
        marginTop: 20,
        // paddingHorizontal: 10,
    },
    labelrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    labelimage: {
        width: '48%',
        // height: 200,
    },
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    circle: {
        alignItems: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: Constant.colors.primaryColor,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
});

