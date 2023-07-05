import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Images from '../../assets/images/Images';
import GlobalStyles from '../../shared/GlobalStyles';
import Header from '../../components/Header';

const CountryScreen = () => {
    const data = [
        { id: 1, name: 'UAE', flag: Images.uaeFlag },
        { id: 2, name: 'UAE', flag: Images.uaeFlag },
        { id: 3, name: 'UAE', flag: Images.uaeFlag },
        { id: 4, name: 'UAE', flag: Images.uaeFlag },
        { id: 5, name: 'UAE', flag: Images.uaeFlag },
        { id: 6, name: 'UAE', flag: Images.uaeFlag },
        { id: 7, name: 'UAE', flag: Images.uaeFlag },
        { id: 8, name: 'UAE', flag: Images.uaeFlag },
        { id: 9, name: 'UAE', flag: Images.uaeFlag },
        // Add more country objects here
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.flag} style={styles.flag} />
            <Text style={styles.countryName}>{item.name}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={GlobalStyles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        padding: 8,
        borderRadius: 8,
    },
    flag: {
        width: 40,
        height: 40,
        marginRight: 8,
    },
    countryName: {
        color: 'black',
        fontSize: 16,
    },
});

export default CountryScreen;
