import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Constants
import Colors from '../Constants/colors';
// Components
import Icon from './Icon';
// Navigation
import ShopNavigator from '../Navigation/ShopNavigator';
import CartNavigator from '../Navigation/CartNavigator';
import AdminNavigator from '../Navigation/AdminNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <BottomTabs.Screen name="Home" component={ShopNavigator} options={{ tabBarIcon: ({ focused }) => (<Icon name="House" height="20" fill={Colors.colorPrimaryLight} />) }} />
            <BottomTabs.Screen name="Carrito Compras" component={CartNavigator} options={{ tabBarIcon: ({ focused }) => (<Icon name="CartShopping" height="20" fill={Colors.colorPrimaryLight} />) }} />
            <BottomTabs.Screen name="Admin" component={AdminNavigator} options={{ tabBarIcon: ({ focused }) => (<Icon name="House" height="20" fill={Colors.colorPrimaryLight} />) }} />
        </BottomTabs.Navigator>
    );
}

export default TabNavigator;