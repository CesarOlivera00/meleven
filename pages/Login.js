import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Colors from '../constants/colors';
import Icon from '../components/Icon';

const Login = (props) => {
    const { onLoginSuccess } = props;
    const [inputName, SetInputName] = useState('');
    const [inputPassword, SetInputPassword] = useState('');

    const OnHandlerChangeName = (value) => SetInputName(value);
    const OnHandlerChangePassword = (value) => SetInputPassword(value);

    function OnHanlderLogin() {
        onLoginSuccess(ValidarUsuario(inputName, inputPassword));
    }

    function ValidarUsuario(usuario, password) {
        return (usuario == 'colivera' && password == '123456');
    }

    return (
        <View style={Styles.containerLogin}>
            <Image
                style={Styles.coverLogin}
                source={ require('../assets/images/cover-login.jpg') }
            />
            <View style={Styles.wrapperLogin}>
                <Text style={Styles.titleLogin}>Bienvenido!</Text>
                <View style={Styles.wrapperInput}>
                    <View style={Styles.inputIcon}>
                        <Icon name="User" height="22" width="22" fill="#D7DBDD" />
                        <TextInput
                            placeholder='Email ó Nombre de Usuario'
                            style={Styles.inputForm}
                            onChangeText={OnHandlerChangeName}
                        />
                    </View>
                </View>
                <View style={Styles.wrapperInput}>
                    <View style={Styles.inputIcon}>
                        <Icon name="Lock" height="22" width="22" fill="#D7DBDD" />
                        <TextInput
                            placeholder='Contraseña'
                            style={Styles.inputForm}
                            secureTextEntry={true}
                            onChangeText={OnHandlerChangePassword}
                        />
                    </View>
                </View>
                <Text style={{textAlign: 'right', width: '100%', paddingRight: 25, color: '#E74C3C'}}>Olvidé mi contraseña</Text>
                <View>
                    <TouchableOpacity style={Styles.buttonLogin} onPress={OnHanlderLogin}>
                        <Text style={{color: '#FFFFFF'}}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonRegistrar}>
                        <Text style={{color: '#3498DB'}}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;

const Styles = StyleSheet.create({
    containerLogin: {
        width: '100%',
        height: '100%'
    },
    coverLogin: {
        height: '35%',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    wrapperLogin: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    titleLogin: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 40
    },
    wrapperInput: {
        width: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    inputIcon: {
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        borderColor: '#D5DBDB',
        borderRadius: 5,
        borderWidth: 2,
    },
    inputForm: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
    },
    buttonLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 270,
        height: 50,
        marginTop: 40,
        backgroundColor: Colors.buttonPrimaryBackground,
        borderColor: Colors.buttonPrimaryBorder,
        borderRadius: 20,
        borderWidth: 2
    },
    buttonRegistrar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 270,
        height: 50,
        marginTop: 10,
        borderColor: Colors.buttonPrimaryBackground,
        borderRadius: 20,
        borderWidth: 2
    }
});