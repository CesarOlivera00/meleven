import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Data
import { Productos } from '../Data/Productos';
// Constants
import Colors from '../Constants/colors';
import Fonts from '../Constants/fonts';
// Components
import IconButton from '../Components/FormControls/IconButton'

const iconHeaderSize = 25;

const DetalleProducto = ({route, navigation}) => {
    const Producto = useSelector(store => store.productos.selected);
    console.log("Producto seleccionado:", Producto.id_producto);

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
                        source={ Producto.foto }
                    />
                </View>
                <Text style={Styles.nombreProducto}>{Producto.nombre_producto}</Text>
                <Text style={Styles.precioProducto}>${Producto.precio}</Text>
                <Text style={Styles.descripcionProducto}>
                    {Producto.descripcion}
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