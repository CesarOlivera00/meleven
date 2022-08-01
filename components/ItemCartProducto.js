import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useState } from 'react';
// Constants
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
// Components
import IconButton from './formControls/IconButton';

const ItemCartProducto = (props) => {
    const { nombre_producto, talle, color, cantidad, precio, foto } = props.item;
    var precioTotal = parseFloat(precio) * parseFloat(cantidad);

    return (
        <View style={Styles.containerItemCart}>
            <View style={Styles.wrapperItemCart}>
                <View style={Styles.containerImage}>
                    <Image style={Styles.imageProducto} source={foto} />
                </View>
                <View style={Styles.containerInfo}>
                    <View style={Styles.wrapperData}>
                        <Text style={Styles.textNombreProducto}>{nombre_producto}</Text>
                    </View>
                    <View style={Styles.wrapperData}>
                        <Text style={Styles.textData}>Talle: {talle}</Text>
                    </View>
                    <View style={Styles.wrapperData}>
                        <Text style={Styles.textData}>Color: {color}</Text>
                    </View>
                    <View style={Styles.wrapperData}>
                        <Text style={Styles.textData}>Cant: {cantidad}</Text>
                    </View>
                    <View style={Styles.wrapperData}>
                        <Text style={Styles.textData}>Unidad: {precio}</Text>
                    </View>
                    <View style={Styles.wrapperData}>
                        <Text style={Styles.textPrecioTotal}>{precioTotal}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ItemCartProducto;

const Styles = StyleSheet.create({
    containerItemCart: {
        width: '100%',
        padding: 10,
    },
    wrapperItemCart: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    containerImage: {
        width: '35%',
        height: 130,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProducto: {
        width: '100%',
        height: '100%',
    },
    containerInfo: {
        width: '65%',
        paddingLeft: 5,
        padding: 10
    },
    textNombreProducto: {
        fontSize: 16,
        fontFamily: Fonts.fmMedium
    },
    textData: {
        fontSize: 12,
        fontFamily: Fonts.fmRegular
    },
    textPrecioTotal: {
        fontSize: 18,
        fontFamily: Fonts.fmMedium,
        color: Colors.buttonPrimaryBorder,
        textAlign: 'right'
    }
});