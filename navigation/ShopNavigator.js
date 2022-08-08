import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Pages
import CategoriaScreen from '../screens/CategoriaScreen';
import ListaProductos from '../screens/ListaProductos';
import DetalleProducto from '../screens/DetalleProducto';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="CategoriaScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="CategoriaScreen" component={CategoriaScreen} />
            <Stack.Screen name="ListaProductos" component={ListaProductos} />
            <Stack.Screen name="DetalleProducto" component={DetalleProducto} />
        </Stack.Navigator>
    );
}

export default ShopNavigator;