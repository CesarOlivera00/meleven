import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Pages
import ListaProductos from '../screens/ListaProductos';
import DetalleProducto from '../screens/DetalleProducto';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="ListaProductos" screenOptions={{headerShown: false}}>
            <Stack.Screen name="ListaProductos" component={ListaProductos} />
            <Stack.Screen name="DetalleProducto" component={DetalleProducto} />
        </Stack.Navigator>
    );
}

export default ShopNavigator;