import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import MiTienda from '../Screens/MiTienda';

const Stack = createNativeStackNavigator();

const AdminNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="MiTienda" screenOptions={{headerShown: false}}>
            <Stack.Screen name="MiTienda" component={MiTienda} />
        </Stack.Navigator>
    );
}

export default AdminNavigator;