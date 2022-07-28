import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
// Data
import { Productos } from '../data/Productos';
// Constants
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
// Components
import IconButton from '../components/formControls/IconButton'

const iconHeaderSize = 25;

const DetalleProducto = ({route, navigation}) => {
    console.log("Producto seleccionado:", route.params.id);
    var id = route.params.id;
    var producto = Productos.find(p => p.id_producto == id);

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
                        source={ producto.foto }
                    />
                </View>
                <Text style={Styles.nombreProducto}>{producto.nombre_producto}</Text>
                <Text style={Styles.precioProducto}>${producto.precio}</Text>
                <Text style={Styles.descripcionProducto}>
                    {producto.descripcion}
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