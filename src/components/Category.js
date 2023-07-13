import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Images from '../assets/images/Images';

const Category = () => {
    const images = [
        { id: 1, image: Images.Cat1, title: 'Image 1' },
        { id: 2, image: Images.Cat2, title: 'Image 2' },
        { id: 3, image: Images.Cat3, title: 'Image 2' },
        { id: 4, image: Images.Cat4, title: 'Image 2' },
        { id: 5, image: Images.Cat5, title: 'Image 2' },
        { id: 6, image: Images.Cat6, title: 'Image 2' },
        { id: 7, image: Images.Cat7, title: 'Image 2' },
        { id: 8, image: Images.Cat8, title: 'Image 2' },
        // Add more image objects here
    ];
    return (
        <View style={styles.container}>
            {images.map((item, index) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={item.image} style={styles.image} resizeMode="cover" />
                    {/* <Text style={styles.title}>{item.title}</Text> */}
                </View>
            ))}
        </View>
    )
}
const CategoryTwo = () => {
    const images = [
        { id: 1, image: Images.pc1, title: 'Image 1' },
        { id: 2, image: Images.pc2, title: 'Image 2' },
        { id: 3, image: Images.pc3, title: 'Image 2' },
        { id: 4, image: Images.pc4, title: 'Image 2' },
        { id: 5, image: Images.pc5, title: 'Image 2' },
        { id: 6, image: Images.pc6, title: 'Image 2' },
        // Add more image objects here
    ];
    return (
        <View style={styles.container}>
            {images.map((item, index) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={item.image} style={styles.image} resizeMode="cover" />
                    {/* <Text style={styles.title}>{item.title}</Text> */}
                </View>
            ))}
        </View>
    )
}
const CategoryThree = () => {
    const images = [
        { id: 1, image: Images.EL1, title: 'Image 1' },
        { id: 2, image: Images.EL2, title: 'Image 2' },
        { id: 3, image: Images.EL3, title: 'Image 2' },
        { id: 4, image: Images.EL4, title: 'Image 2' },
        // Add more image objects here
    ];
    return (
        <View style={styles.container}>
            {images.map((item, index) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={item.image} style={styles.image} resizeMode="contain" />
                    {/* <Text style={styles.title}>{item.title}</Text> */}
                </View>
            ))}
        </View>
    )
}
const CategoryFour = () => {
    const images = [
        { id: 1, image: Images.Brand1, title: 'Image 1' },
        { id: 2, image: Images.Brand2, title: 'Image 2' },
        { id: 3, image: Images.Brand3, title: 'Image 2' },
        { id: 5, image: Images.Brand4, title: 'Image 2' },
        { id: 6, image: Images.Brand5, title: 'Image 2' },
        { id: 7, image: Images.Brand6, title: 'Image 2' },
        // Add more image objects here
    ];
    return (
        <View style={styles.container}>
            {images.map((item, index) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={item.image} style={styles.image} resizeMode="contain" />
                    {/* <Text style={styles.title}>{item.title}</Text> */}
                </View>
            ))}
        </View>
    )
}

export { Category, CategoryTwo, CategoryThree, CategoryFour };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemContainer: {
        width: '48%',
        marginBottom: 25,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderWidth: 0.5
    },
    image: {
        width: '100%',
        height: 170,
    },
    title: {
        // padding: 10,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})