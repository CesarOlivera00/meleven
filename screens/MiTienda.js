import React, { useState, useEffect } from "react";
import { View, Button, TextInput, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
// DB
import { DB_InsertTienda, DB_UpdateTienda, DB_GetTienda } from "../DBHelper";
// Redux
import { InsertTienda } from "../Store/actions/tienda.action";
// Constants
import Colors from "../Constants/colors";
import Fonts from "../Constants/fonts";
// Components
import LocationSelector from '../Components/LocationSelector';

const MiTienda = (props) => {
    const dispatch = useDispatch();

    const [tiendaCargada, SetTiendaCargada] = useState(false);
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

    useEffect(() => {
        LoadData();
    }, []);

    async function LoadData() {
        await DB_GetTienda()
            .then((result) => {
                if (result.rows._array.length > 0){
                    var obj = result.rows._array[0];
        
                    SetNombreTienda(obj["nombre_tienda"]);
                    SetTextoCalle(obj["texto_calle"]);
                    SetAltura(obj["altura"].toString());
                    SetTextoLocalidad(obj["texto_localidad"]);
                    SetTextoProvincia(obj["texto_provincia"]);
                    SetCodigoPostal(obj["codigo_postal"]);

                    SetTiendaCargada(true);
                }
                else {
                    SetTiendaCargada(false);
                }
            })
            .catch((err) => {
                console.log("Error");
                console.log(err.message);
            });
    }

    async function OnClickGuardar() {
        //dispatch(InsertTienda(nombreTienda, textoProvincia, textoLocalidad, textoCalle, altura, 'imagen', 1, 2));
        if (!tiendaCargada){
            await DB_InsertTienda(nombreTienda, altura, textoCalle, textoLocalidad, textoProvincia, codigoPostal, 1, 2, 'imagen')
                .then(() => { 
                    console.log("Se inserto!");
                    SetTiendaCargada(true);
                })
                .catch((err) => {
                    console.log("Error");
                    console.log(err.message);
                });
        }
        else {
            await DB_UpdateTienda(nombreTienda, altura, textoCalle, textoLocalidad, textoProvincia, codigoPostal, 1, 2, 'imagen')
                .then(() => console.log("Se actualizo!"))
                .catch((err) => {
                    console.log("Error");
                    console.log(err.message);
                });
        }
    }
    
    return (
        <ScrollView>
            <View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Nombre de la tienda'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeName}
                        value={nombreTienda}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Calle'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeTextoCalle} 
                        value={textoCalle}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Altura'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeAltura} 
                        value={altura}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Localidad'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeTextoLocalidad} 
                        value={textoLocalidad}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Provincia'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeTextoProvincia} 
                        value={textoProvincia}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='CodigoPostal'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeCodigoPostal} 
                        value={codigoPostal}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Local'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeLocal} 
                        value={local}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Piso'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangePiso} 
                        value={piso}
                    />
                </View>
                <View style={Styles.wrapperInput}>
                    <TextInput 
                        placeholder='Departamento'
                        style={Styles.inputForm}
                        onChangeText={OnHandlerChangeDepartamento} 
                        value={departamento}
                    />
                </View>
                <LocationSelector />
                <Button
                    title="Guardar"
                    onPress={OnClickGuardar}
                />
            </View>
        </ScrollView>
    );
}

export default MiTienda;

const Styles = StyleSheet.create({
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
        paddingRight: 10,
        marginBottom: 10,
        borderColor: '#D5DBDB',
        borderRadius: 5,
        borderWidth: 2,
        fontFamily: Fonts.fmRegular,
    }
});