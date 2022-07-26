import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
// Components
import ModalMessage from './components/modal/ModalMessage';
import Icon from './components/Icon';
import HeaderMain from './components/HeaderMain';
import IconButton from './components/formControls/IconButton';
//Pages
import Login from './pages/Login';
import ListaProductos from './pages/ListaProductos';
import DetalleProducto from './pages/DetalleProducto';

export default function App() {
    // Modal
    const [modalVisible, SetModalVisible] = useState(false);
    const [modalProps, SetModalProps] = useState({});
    // Login
    const [userLogin, SetUserLogin] = useState(false);
    // Productos
    const [buyProduct, SetBuyProduct] = useState(false);

    const OnHandlerChangeItem = (text) => SetItem(text);

    // Modal functions
    const OnHandlerModalAccept = (okModal) => {
        SetModalVisible(false);
        console.log("okModal:", okModal);
    }

    const OnHandlerModalCancel = () => {
        SetModalVisible(false);
    }
    // End Modal funtions

    // Login functions
    function OnLoginSuccess(okLogin) {
        if (okLogin){
            console.log("OnLoginSuccess: El usuario se logeo correctamente!");
            SetUserLogin(true);
        }
        else {
            SetModalProps({
                title: "Error",
                message: "Error en usuario y/o contraseña!",
                onHandlerModalAccept: OnHandlerModalAccept,
                onHandlerModalCancel: null
            });
            SetModalVisible(true);
        }
    }
    // En Login Functions

    function OnBuyProducto(id) {
        console.log("Producto seleccionado:", id);
        SetBuyProduct(true);
    }

    function OnCancelBuyProducto(){
        SetBuyProduct(false);
    }

    var content = <Login onLoginSuccess={OnLoginSuccess}></Login>

    if (userLogin){
        content = <ListaProductos OnBuyProducto={OnBuyProducto} />

        if (buyProduct){
            content = <DetalleProducto OnCancelBuy={OnCancelBuyProducto} />
        }
    }

    return (
        <View style={Styles.container}>
            <ModalMessage
                modalVisible={modalVisible}
                title={modalProps.title}
                message={modalProps.message}
                onHandlerModalAccept={modalProps.onHandlerModalAccept}
                onHandlerModalCancel={modalProps.onHandlerModalCancel}
            >
            </ModalMessage>
            
            {userLogin ? <HeaderMain /> : null}

            {content}
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#F2F3F4',
        height: '100%',
        /*paddingTop: 35*/
    },
});