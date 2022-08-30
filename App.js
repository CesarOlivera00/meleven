import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
// DB
import { init } from "./DBHelper"
// Store
import store from './Store'
// Components
import ModalMessage from './Components/Modal/ModalMessage';
import HeaderMain from './Components/HeaderMain';
//Navigator
import TabNavigator from './Components/TabNavigator';
//Pages
import Login from './Screens/Login';

init()
    .then(() => console.log("Database Initialized"))
    .catch((err) => {
        console.log("Database fail connect");
        console.log(err.message);
    });

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

    return (
        <Provider store={store}>
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
                                    <TabNavigator />
                                </NavigationContainer>
                            </>
                }
            </View>
        </Provider>
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