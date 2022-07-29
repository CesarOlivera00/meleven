import React from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
// Data
import { Productos } from '../data/Productos';
// Constants
// Components
import ItemCardProducto from '../components/ItemCardProducto';

const Carrito = (props) => {
    function ShowDetailsProducto(id_producto){
        props.navigation.navigate('DetalleProducto', {id: id_producto});
    }

    const RenderItem = ({ item }) => {
        return <ItemCardProducto item={item} OnPressBuy={ShowDetailsProducto} />
    }

    return (
        <View style={Styles.containerListItems}>
            <Text>Carrito</Text>
        </View>
    );
}

export default Carrito;

const Styles = StyleSheet.create({
    containerListItems: {
        width: '100%',
    }
});