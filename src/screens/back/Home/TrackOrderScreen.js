import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../../shared/GlobalStyles';
import Button from '../../../components/Button';

const TrackOrderScreen = () => {
    const [isSelected, setIsSelected] = useState(true);

    const handlePress = () => {
        setIsSelected(!isSelected);
    };
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Search By : Order Reference No</Text>
            <TouchableOpacity onPress={handlePress}>
                <View
                    style={[
                        styles.dot,
                        isSelected ? styles.selectedDot : styles.unselectedDot,
                    ]}
                />
            </TouchableOpacity>
            <TextInput
                style={GlobalStyles.inputContainer}
                placeholder='ENTER YOUR ORDER REFERENCE NO'
            />
            <Text style={styles.description}>Check current status of your shipment</Text>
            <View style={{ marginTop: 10 }}>
                <Button text='TRACK YOUR ORDER' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        elevation: 5, // Shadow effect for Android (elevation property)
        shadowColor: '#000', // Shadow effect for iOS
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
    },
    dot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        margin: 5,
    },
    selectedDot: {
        backgroundColor: 'blue', // Customize the selected dot's color
    },
    unselectedDot: {
        backgroundColor: 'gray', // Customize the unselected dot's color
    },
});

export default TrackOrderScreen;
