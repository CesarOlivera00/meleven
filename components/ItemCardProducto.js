import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
// Constants
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
// Components
import IconButton from './formControls/IconButton';

const ItemCardProducto = (props) => {
    return (
        <View style={Styles.containerCard}>
            <View style={Styles.wrapperCard}>
                <View style={Styles.wrapperButtonFavorito}>
                    <IconButton iconName="HeartRegular" iconHeight="20" iconWidth="20" style={Styles.buttonFavorito} />
                </View>
                <View style={Styles.wrapperImageProducto}>
                    <Image
                        style={Styles.imageProducto}
                        source={ require('../assets/images/cover-login.jpg') }
                    />
                </View>
                <Text style={Styles.nombreProducto}>Nombre Producto</Text>
                <Text style={Styles.precioProducto}>$99999,99</Text>
                <TouchableOpacity style={Styles.buttonComprar} onPress={() => {props.OnPressBuy(props.id)}}>
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
        padding: 10,
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