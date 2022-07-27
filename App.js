import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Components
import ModalMessage from './components/modal/ModalMessage';
import HeaderMain from './components/HeaderMain';
//Pages
import Login from './pages/Login';
import ListaProductos from './pages/ListaProductos';
import DetalleProducto from './pages/DetalleProducto';

const Stack = createNativeStackNavigator();

export default function App() {
    const [loaded] = useFonts({
        MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
        MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
        MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
        MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    });

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
            Alert.alert("Aviso", "Usuario y/o contraseña incorrectos.", [{text: "Ok"}]);
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
            
            {
                !userLogin
                    ?
                        <Login onLoginSuccess={OnLoginSuccess} />
                    :
                        <>
                            <HeaderMain />
                            <NavigationContainer>
                                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                                    <Stack.Screen name="ListaProductos" component={ListaProductos} />
                                    <Stack.Screen name="DetalleProducto" component={DetalleProducto} />
                                </Stack.Navigator>
                            </NavigationContainer>
                        </>
                    
            }
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