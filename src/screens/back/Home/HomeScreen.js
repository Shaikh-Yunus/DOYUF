import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import Images from '../../../assets/images/Images';
import Constant from '../../../shared/Constant';
import GlobalStyles from '../../../shared/GlobalStyles';
import BackHeader from '../../../components/BackHeader';
import BottomTab from '../../../components/BottomTab';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SwiperComponent from '../../../components/SwiperComponent'
import SubHeading from '../../../components/SubHeading';
import { Category, CategoryFour, CategoryThree, CategoryTwo } from '../../../components/Category';
import { Label, IconsGroup } from '../../../components/Label';
const HomeScreen = () => {
    const data = [
        { id: '1', category: 'WOMEN', image: Images.Women1 },
        { id: '2', category: 'MEN', image: Images.men1 },
        { id: '3', category: 'BAGS', image: Images.bag2 },
        { id: '4', category: 'SUNGLASSES', image: Images.glasses1 },
        { id: '5', category: 'SHOES', image: Images.women },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.category}>{item.category}</Text>
        </View>
    );

    return (
        <View style={GlobalStyles.container}>
            <BackHeader />
            <ScrollView style={{ flex: 1, height: '100%' }}>
                <View >
                    <View style={GlobalStyles.wrapper}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />
                        <SwiperComponent />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={Images.bag1} style={{ height: 150, width: 150 }} />
                            <Image source={Images.bag1} style={{ height: 150, width: 150 }} />
                        </View>
                    </View>
                    <View stlye={{}}>
                        <Image source={Images.banner} style={{ marginTop: 20, width: '100%', height: 100 }} />
                    </View>
                    <View style={GlobalStyles.wrapper}>
                        <View>
                            <SubHeading text='SHOP BY CATEGORY' />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Category />
                        </View>
                    </View>
                    <View style={GlobalStyles.wrapper}>

                        <View>
                            <Image source={Images.banner2} style={{ height: 150, width: '100%' }} />
                        </View>
                        <View>
                            <SubHeading text='PREMIUM COLLECTION' />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <CategoryTwo />
                        </View>
                        <View>
                            <SubHeading text='YOUR FAVOURITE LABELS' />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Label />
                        </View>
                        <View>
                            <SubHeading text='EXCLUSIVELY ON DOYUF' />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <CategoryThree />
                        </View>
                        <View>
                            <SubHeading text='TOP LABELS' />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <CategoryFour />
                        </View>
                    </View>
                    <View>
                        <Image source={Images.banner3} style={{ height: 100, width: '100%' }} resizeMode='contain' />
                    </View>
                    <View style={GlobalStyles.wrapper}>

                        <View>
                            <SubHeading text='THE DOYUF BRAND PROMISE' />
                        </View>
                        <View style={{}}>
                            <IconsGroup />
                        </View>
                    </View>
                </View>
            </ScrollView>



            {/* <View style={{ flex: 0 }}>
                <BottomTab />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    item: {
        // backgroundColor: '#f2f2f2',
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 8,
        borderWidth: 0.5,
        borderColor: Constant.colors.textColor,
        borderRadius: 5
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Constant.colors.textColor,
        fontFamily: Constant.fontFamily
    },
});

export default HomeScreen;
