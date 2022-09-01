import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, Alert, addons } from "react-native";
import * as Location from "expo-location";

import Colors from "../Constants/colors";

const LocationSelector = (props) => {
    const [pickedLocation, SetPickedLocation] = useState();

    useEffect(() => {
        StartWatching();
    }, []);

    async function StartWatching () {
        try {
            await Location.requestBackgroundPermissionsAsync();
        } catch (error) {
            
        }
    };

    async function GetLocation() {
        const isLocationOk = await VerifyPermissions();
        if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        });

        SetPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
    }

    async function VerifyPermissions() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status);
        if (status !== "granted"){
            Alert.alert("Permisos insuficientes", "Necesita dar permisos de la localización para usar esta funcionalidad.", [{ text: "Ok" }]);
            return false;
        }

        return true;
    }

    return (
        <View>
            <View>
                { pickedLocation ? <Text>{pickedLocation.lat}, {pickedLocation.lng}</Text> : <Text>Esperando ubicación...</Text> }
            </View>
            <Button
                title="Obtener Ubicación"
                color={Colors.buttonPrimaryBackground}
                onPress={GetLocation}
            />
        </View>
    );
}

export default LocationSelector;