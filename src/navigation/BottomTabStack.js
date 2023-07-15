import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomerStack } from './CustomerStack';
import AccountScreen from '../screens/back/Account/AccountScreen';
import CartScreen from '../screens/back/Cart/CartScreen';
import User from 'react-native-vector-icons/FontAwesome'
import WishListScreen from '../screens/back/Wishlist/WishListScreen';
import Constant from '../shared/Constant';





const Tab = createBottomTabNavigator();

const BottomTabStack = ({ route, navigation }) => {
    // const [appState, setAppState] = useState(AppState.currentState);
    console.log("route prop:", route);
    const [Count, setCount] = React.useState(null)

    const getTabBarStyle = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'CustomerStack';
        let display = (routeName === 'Player') ? 'none' : 'flex';
        return { display }
    }
    <Tab.Screen
        name="CustomerStack"
        component={CustomerStack}
        options={({ route }) => ({ tabBarStyle: getTabBarStyle(route) })} />
    return (

        <Tab.Navigator initialRouteName='CustomerStack'
            tabBarOptions={{
                activeTintColor: Constant.colors.primaryColor,
                inactiveTintColor: Constant.colors.primaryColor,
                labelStyle: { display: 'none' },
            }}
            screenOptions={({ route, }) => ({
                tabBarStyle: {
                    backgroundColor: 'white',
                },

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === "CustomerStack") {
                        iconName = focused ? 'home' : 'home'
                    }

                    else if (rn === "WishListScreen") {
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadBadgeText}>11</Text>
                        </View>
                        iconName = focused ? 'heart' : 'heart'

                    }

                    else if (rn === "CartScreen") {
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadBadgeText}>11</Text>
                        </View>
                        iconName = focused ? 'shopping-cart' : 'shopping-cart'

                    }
                    else if (rn === "AccountScreen") {
                        iconName = focused ? 'user' : 'user'
                    }
                    return <User name={iconName} size={size} color={color} />
                },
            })}>
            <Tab.Screen options={{ headerShown: false, }} name="CustomerStack" component={CustomerStack} />

            <Tab.Screen options={{
                headerShown: false,
            }} name="WishListScreen" component={WishListScreen} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarBadge: isNaN(Count) ? null : Count,
            }} name="CartScreen" component={CartScreen} />
            <Tab.Screen options={{ headerShown: false, }} name="AccountScreen" component={AccountScreen} />

        </Tab.Navigator>

    )

}

export default BottomTabStack

const styles = StyleSheet.create({})