import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
// Constants
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
// Components
import IconButton from '../components/formControls/IconButton'

const iconHeaderSize = 25;

const DetalleProducto = ({route, navigation}) => {
    console.log("Producto seleccionado:", route.params.id);

    function ReturnListaProductos() {
        navigation.navigate("ListaProductos");
    }

    return (
        <ScrollView>
            <View style={Styles.containerItemDetail}>
                <View style={Styles.headerDetail}>
                    <IconButton iconName="ArrowLeft" iconHeight={iconHeaderSize} style={Styles.buttonHeader} onPress={ReturnListaProductos} />
                    <Text style={Styles.titleDetail}>Detalles</Text>
                    <IconButton iconName="HeartRegular" iconHeight={iconHeaderSize} style={Styles.buttonHeader}  />
                </View>
                <View style={Styles.wrapperImage}>
                    <Image
                        style={Styles.imageProducto}
                        source={ require('../assets/images/cover-login.jpg') }
                    />
                </View>
                <Text style={Styles.nombreProducto}>Nombre Producto</Text>
                <Text style={Styles.precioProducto}>$99999.99</Text>
                <Text style={Styles.descripcionProducto}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet facilisis eros, eget gravida erat. 
                    Nulla aliquam imperdiet leo, in varius eros cursus ut. Pellentesque nulla purus, scelerisque volutpat iaculis quis, tristique eu odio. 
                    Etiam iaculis, turpis quis aliquam feugiat, neque lacus eleifend tortor, quis sodales enim orci vitae eros.
                </Text>
            </View>
        </ScrollView>
    );
}

export default DetalleProducto;

const Styles = StyleSheet.create({
    containerItemDetail: {
        padding: 10
    },
    headerDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonHeader: {
        padding: 5
    },
    titleDetail: {
        fontSize: 18,
        fontFamily: Fonts.fmRegular,
    },
    wrapperImage: {
        width: '100%',
        marginBottom: 15
    },
    imageProducto: {
        width: '100%'
    },
    nombreProducto: {
        fontSize: 22,
        fontFamily: Fonts.fmMedium,
        marginBottom: 10
    },
    precioProducto: {
        fontSize: 22,
        fontFamily: Fonts.fmMedium,
        marginBottom: 10,
        color: Colors.buttonPrimaryBorder
    },
    descripcionProducto: {
        fontSize: 16,
        fontFamily: Fonts.fmRegular,
        marginBottom: 10
    }
});