import React, { useState, useEffect } from "react";
import { View, Button, TextInput, Text, StyleSheet, Alert, addons } from "react-native";

// Constants
import Colors from "../Constants/colors";
import Fonts from "../Constants/fonts";
// Components
import LocationSelector from '../Components/LocationSelector';

const MiTienda = (props) => {
    const [nombreTienda, SetNombreTienda] = useState('');
    const [textoCalle, SetTextoCalle] = useState('');
    const [altura, SetAltura] = useState('');
    const [textoLocalidad, SetTextoLocalidad] = useState('');
    const [textoProvincia, SetTextoProvincia] = useState('');
    const [codigoPostal, SetCodigoPostal] = useState('');
    const [local, SetLocal] = useState('');
    const [piso, SetPiso] = useState('');
    const [departamento, SetDepartamento] = useState('');

    function OnHandlerChangeName(value) { SetNombreTienda(value); }
    function OnHandlerChangeTextoCalle(value) { SetTextoCalle(value); }
    function OnHandlerChangeAltura(value) { SetAltura(value); }
    function OnHandlerChangeTextoLocalidad(value) { SetTextoLocalidad(value); }
    function OnHandlerChangeTextoProvincia(value) { SetTextoProvincia(value); }
    function OnHandlerChangeCodigoPostal(value) { SetCodigoPostal(value); }
    function OnHandlerChangeLocal(value) { SetLocal(value); }
    function OnHandlerChangePiso(value) { SetPiso(value); }
    function OnHandlerChangeDepartamento(value) { SetDepartamento(value); }
    
    return (
        <View>
            <View>
                <TextInput 
                    placeholder='Nombre de la tienda'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeName} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Calle'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeTextoCalle} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Altura'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeAltura} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Localidad'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeTextoLocalidad} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Provincia'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeTextoProvincia} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='CodigoPostal'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeCodigoPostal} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Local'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeLocal} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Piso'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangePiso} 
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Departamento'
                    style={Styles.inputForm}
                    onChangeText={OnHandlerChangeDepartamento} 
                />
            </View>
            <LocationSelector />
        </View>
    );
}

export default MiTienda;

const Styles = StyleSheet.create({
    inputForm: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        fontFamily: Fonts.fmRegular
    }
});