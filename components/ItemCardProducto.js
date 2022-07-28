import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useState } from 'react';
// Constants
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
// Components
import IconButton from './formControls/IconButton';

const ItemCardProducto = (props) => {
    const [itemfavorito, SetItemfavorito] = useState(false);

    const { id_producto, nombre_producto, precio, foto } = props.item;

    return (
        <View style={Styles.containerCard}>
            <View style={Styles.wrapperCard}>
                <View style={Styles.wrapperButtonFavorito}>
                    <IconButton
                        style={Styles.buttonFavorito}
                        iconName={itemfavorito ? "HeartSolid" : "HeartRegular"}
                        iconHeight="20"
                        iconWidth="20"
                        iconFill={itemfavorito ? "#ff0000" : "#000"}
                        onPress={() => {SetItemfavorito(true)}}
                    />
                </View>
                <View style={Styles.wrapperImageProducto}>
                    <Image
                        style={Styles.imageProducto}
                        source={ foto }
                    />
                </View>
                <Text style={Styles.nombreProducto}>{nombre_producto}</Text>
                <Text style={Styles.precioProducto}>${precio}</Text>
                <TouchableOpacity style={Styles.buttonComprar} onPress={() => {props.OnPressBuy(id_producto)}}>
                    <Text style={Styles.buttonTextComprar}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ItemCardProducto;

const Styles = StyleSheet.create({
    containerCard: {
        width: Dimensions.get('window').width < 500 ? '50%' : '33%',
        padding: 5,
    },
    wrapperCard: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 5,
        paddingTop: 5,
        borderRadius: 5,
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
    wrapperButtonFavorito: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
    },
    buttonFavorito: {
        display: 'flex',
        width: 30
    },
    wrapperImageProducto: {
        width: '100%',
        height: 180,
        marginBottom: 10,
    },
    imageProducto: {
        width: '100%',
        height: '100%'
    },
    nombreProducto: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
        fontSize: 14,
        fontFamily: Fonts.fmRegular,
        textAlign: 'center'
    },
    precioProducto: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: Fonts.fmRegular,
        color: Colors.priceItemProducto,
    },
    buttonComprar: {
        justifyContent: 'center',
        height: 30,
        width: '100%'
    },
    buttonTextComprar: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: Fonts.fmSemiBold,
        color: '#000',
    },
});