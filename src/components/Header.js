import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <AntDesign name="left" size={24} color="black" />
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>Select Country</Text>
            </View>
            <View style={styles.right}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
        // padding:20,
        backgroundColor: 'white',
    },
    left: {
        flex: 1,
    },
    center: {
        flex: 2,
        alignItems: 'center',
    },
    right: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Header;
