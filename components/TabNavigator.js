import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Constants
import Colors from '../constants/colors';
// Components
import Icon from '../components/Icon';
// Navigation
import ShopNavigator from '../navigation/ShopNavigator';
import CartNavigator from '../navigation/CartNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <BottomTabs.Screen name="Home" component={ShopNavigator} options={{ tabBarIcon: ({ focused }) => (<Icon name="House" height="20" fill={Colors.colorPrimaryLight} />) }} />
            <BottomTabs.Screen name="Carrito" component={CartNavigator} options={{ tabBarIcon: ({ focused }) => (<Icon name="CartShopping" height="20" fill={Colors.colorPrimaryLight} />) }} />
        </BottomTabs.Navigator>
    );
}

export default TabNavigator;